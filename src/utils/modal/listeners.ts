import { MODAL_CLASSES } from '@/constants/modal';
import { MODAL_ACTIONS } from './actions';
import { getModalElement } from './getElement';

type ModalEvent = 'transitionend' | 'cancel' | 'pointerdown' | 'click';
type EventHandler = (event: Event) => void;

let pressStartedOnBackdrop = false;

export const MODAL_LISTENERS = {
  add() {
    window.addEventListener('popstate', onPopState);

    const modal = getModalElement();
    if (modal === null) return;

    MODAL_HANDLERS.forEach(([event, handler]) =>
      modal.addEventListener(event, handler),
    );
  },

  remove() {
    window.removeEventListener('popstate', onPopState);

    const modal = getModalElement();
    if (modal === null) return;

    MODAL_HANDLERS.forEach(([event, handler]) =>
      modal.removeEventListener(event, handler),
    );
  },
};

const MODAL_HANDLERS = Object.entries({
  click(event) {
    const isModalTarget = event.target === getModalElement();
    const clickedBackdrop = pressStartedOnBackdrop && isModalTarget;

    pressStartedOnBackdrop = false;
    if (clickedBackdrop) MODAL_ACTIONS.close();
  },

  cancel(event) {
    event.preventDefault();
    MODAL_ACTIONS.close();
  },

  pointerdown(event) {
    pressStartedOnBackdrop = event.target === getModalElement();
  },

  transitionend(event) {
    const modal = getModalElement();
    if (modal === null || event.target !== modal) return;

    const { classList } = modal;
    if (classList.contains(MODAL_CLASSES.showing)) return;

    modal.close();
    classList.remove(MODAL_CLASSES.closing);
  },
} satisfies Record<ModalEvent, EventHandler>);

function onPopState({ state }: PopStateEvent) {
  MODAL_ACTIONS[state?.modalOpen ? 'open' : 'close'](false);
}

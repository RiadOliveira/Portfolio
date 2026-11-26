import { MODAL_CLASSES } from '@/constants/modal';
import { getModalElement } from './getElement';

export const MODAL_ACTIONS = {
  open(pushState = true) {
    const modal = getModalElement();
    if (modal === null || modal.open) return;

    modal.showModal();
    const scrollableContent = modal.querySelector('.overflow-y-scroll');
    if (scrollableContent) scrollableContent.scrollTop = 0;
    modal.classList.add(MODAL_CLASSES.showing);

    if (pushState) window.history.pushState({ modalOpen: true }, '');
  },

  close(popState = true) {
    const modal = getModalElement();
    if (modal === null || !modal.open) return;

    const { classList } = modal;
    classList.remove(MODAL_CLASSES.showing);
    classList.add(MODAL_CLASSES.closing);

    if (popState) window.history.back();
  },
};

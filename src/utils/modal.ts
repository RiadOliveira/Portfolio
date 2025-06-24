import { MODAL_CLASSES, MODAL_ID } from 'constants/modal';

export function addModalListeners() {
  window.addEventListener('popstate', handlePopState);

  getModalElement()?.addEventListener('transitionend', handleTransitionEnd);
  getModalElement()?.addEventListener('cancel', handleCancel);
}

export function removeModalListeners() {
  window.removeEventListener('popstate', handlePopState);

  getModalElement()?.removeEventListener('transitionend', handleTransitionEnd);
  getModalElement()?.removeEventListener('cancel', handleCancel);
}

function handlePopState({ state: { modalOpen } }: PopStateEvent) {
  (!modalOpen ? closeModal : showModal)(false);
}

function handleTransitionEnd(event: Event) {
  const modal = getModalElement()!;
  if (event.target !== modal) return;

  const { classList } = modal;
  if (classList.contains(MODAL_CLASSES.showing)) return;

  modal.close();
  classList.remove(MODAL_CLASSES.closing);
}

function handleCancel(event: Event) {
  event.preventDefault();
  closeModal();
}

export function showModal(pushState = true) {
  const modal = getModalElement()!;
  if (modal.open) return;

  modal.showModal();
  modal.classList.add(MODAL_CLASSES.showing);

  if (pushState) window.history.pushState({ modalOpen: true }, '');
}

export function closeModal(popState = true) {
  const modal = getModalElement()!;
  if (!modal.open) return;

  const { classList } = modal;
  classList.remove(MODAL_CLASSES.showing);
  classList.add(MODAL_CLASSES.closing);

  if (popState) window.history.back();
}

export function getModalElement() {
  return document.getElementById(MODAL_ID) as HTMLDialogElement | null;
}

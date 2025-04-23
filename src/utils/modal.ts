import { MODAL_CLASSES, MODAL_ID } from 'constants/modal';

export function showModal(pushState = true) {
  const modal = getModalElement();
  if (modal === null || modal.open) return;

  modal.showModal();
  modal.classList.add(MODAL_CLASSES.showing);

  if (pushState) window.history.pushState({ modalOpen: true }, '');
  addModalListeners(modal);
}

export function closeModal(popState = true) {
  const modal = getModalElement();
  if (modal === null || !modal.open) return;

  const { classList } = modal;
  classList.remove(MODAL_CLASSES.showing);
  classList.add(MODAL_CLASSES.closing);

  modal.addEventListener(
    'transitionend',
    () => {
      modal.close();
      classList.remove(MODAL_CLASSES.closing);
    },
    { once: true },
  );
  if (popState) window.history.back();
}

function addModalListeners(modal: HTMLDialogElement) {
  window.addEventListener('popstate', handlePopState);
  modal.addEventListener('cancel', handleCancel);
}

function handlePopState({ state: { modalOpen } }: PopStateEvent) {
  (!modalOpen ? closeModal : showModal)(false);
}

function handleCancel(event: Event) {
  event.preventDefault();
  closeModal();
}

function getModalElement() {
  return document.getElementById(MODAL_ID) as HTMLDialogElement | null;
}

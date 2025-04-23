import { MODAL_CLASSES, MODAL_ID } from 'constants/modal';

export function showModal() {
  const modal = getModalElement();
  if (modal.open) return;

  modal.showModal();
  modal.classList.add(MODAL_CLASSES.showing);
  addModalListeners(modal);

  window.history.pushState({ modal: true }, '');
}

export function closeModal() {
  const modal = getModalElement();
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
  removeModalListeners(modal);
}

function addModalListeners(modal: HTMLDialogElement) {
  window.addEventListener('popstate', handlePopState);
  modal.addEventListener('cancel', handleCancel);
}

function removeModalListeners(modal: HTMLDialogElement) {
  window.removeEventListener('popstate', handlePopState);
  modal.removeEventListener('cancel', handleCancel);
}

function handlePopState(_event: PopStateEvent) {
  if (getModalElement().open) closeModal();
}

function handleCancel(event: Event) {
  event.preventDefault();
  closeModal();
}

function getModalElement() {
  return document.getElementById(MODAL_ID) as HTMLDialogElement;
}

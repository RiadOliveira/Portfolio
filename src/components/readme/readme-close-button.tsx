'use client';

import { MODAL_CLASSES, MODAL_ID } from 'constants/modal';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

export function ReadmeCloseButton() {
  useEffect(() => {
    const readmeModal = document.getElementById(MODAL_ID) as HTMLDialogElement;

    function handlePopState() {
      const readmeModal = document.getElementById(MODAL_ID) as HTMLDialogElement;
      if (readmeModal.open) closeModal();
    }

    function handleCancel(event: Event) {
      event.preventDefault();
      closeModal();
    }

    window.addEventListener('popstate', handlePopState);
    readmeModal.addEventListener('cancel', handleCancel);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      readmeModal.removeEventListener('cancel', handleCancel);
    };
  }, []);

  return (
    <button type="button" onClick={closeModal}>
      <IoMdClose size={24} />
    </button>
  );
}

function closeModal() {
  const readmeModal = document.getElementById(MODAL_ID) as HTMLDialogElement;
  const { classList } = readmeModal;

  classList.remove(MODAL_CLASSES.showing);
  classList.add(MODAL_CLASSES.closing);

  readmeModal.addEventListener(
    'transitionend',
    () => {
      readmeModal.close();
      classList.remove(MODAL_CLASSES.closing);
    },
    { once: true },
  );
}

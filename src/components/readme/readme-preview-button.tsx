'use client';

import { MODAL_CLASSES, MODAL_ID } from 'constants/modal';
import { IoReader } from 'react-icons/io5';

export function ReadmePreviewButton() {
  return (
    <button
      type="button"
      onClick={showModal}
      className="flex h-10 items-center justify-center gap-2 rounded-md bg-rose-500/80 px-3 shadow transition-normal duration-200 hover:scale-105 active:scale-105"
    >
      <IoReader size={24} />
      <span className="text-base font-semibold">Preview</span>
    </button>
  );
}

function showModal() {
  const readmeModal = document.getElementById(MODAL_ID) as HTMLDialogElement;
  if (readmeModal.open) return;

  readmeModal.showModal();
  readmeModal.classList.add(MODAL_CLASSES.showing);

  window.history.pushState({ modal: true }, '');
}

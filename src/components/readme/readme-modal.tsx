import { DialogHTMLAttributes } from 'react';
import { ReadmeCloseButton } from './readme-close-button';
import { MODAL_ID } from 'constants/modal';

export function ReadmeModal(props: Omit<DialogHTMLAttributes<HTMLDialogElement>, 'children'>) {
  return (
    <dialog
      id={MODAL_ID}
      className="w-full h-full max-w-[calc(100%-1.25rem)] max-h-[calc(100%-1.25rem)] mt-2.5 mx-auto rounded p-2.5 bg-light dark:bg-dark text-dark dark:text-light shadow-md animated-modal"
      {...props}
    >
      <ReadmeCloseButton />
    </dialog>
  );
}

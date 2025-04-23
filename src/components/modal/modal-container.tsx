import { MODAL_ID } from 'constants/modal';
import { DialogHTMLAttributes } from 'react';
import { ModalCloseButton } from './modal-close-button';

export function ModalContainer({ children, ...props }: DialogHTMLAttributes<HTMLDialogElement>) {
  return (
    <dialog
      id={MODAL_ID}
      className="bg-light dark:bg-dark text-dark dark:text-light animated-modal m-auto h-full max-h-[calc(100%-1.25rem)] w-full max-w-[calc(100%-1.25rem)] rounded shadow-md"
      {...props}
    >
      <header className="text-light dark:bg-light/27 sticky top-0 -mb-10 flex bg-gradient-to-b from-emerald-600 px-4 pt-2.5 pb-10">
        <ModalCloseButton />
      </header>

      {children}
    </dialog>
  );
}

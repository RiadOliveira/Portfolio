import { MODAL_ID } from 'constants/modal';
import { DialogHTMLAttributes, Suspense } from 'react';
import { ModalCloseButton } from './modal-close-button';

export function ModalContainer({ children, ...props }: DialogHTMLAttributes<HTMLDialogElement>) {
  return (
    <dialog
      id={MODAL_ID}
      className="w-full h-full max-w-[calc(100%-1.25rem)] max-h-[calc(100%-1.25rem)] m-auto rounded p-4 bg-light dark:bg-dark text-dark dark:text-light shadow-md animated-modal"
      {...props}
    >
      <ModalCloseButton />

      <Suspense>{children}</Suspense>
    </dialog>
  );
}

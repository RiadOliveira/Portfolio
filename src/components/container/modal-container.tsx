import { ThemeButton } from 'components/client/theme-button';
import { ToggleModalButton } from '../client/toggle-modal-button';
import { MODAL_ID } from 'constants/modal';
import { DialogHTMLAttributes } from 'react';
import { IoMdClose } from 'react-icons/io';

export function ModalContainer({
  children,
  ...props
}: DialogHTMLAttributes<HTMLDialogElement>) {
  return (
    <dialog
      id={MODAL_ID}
      className="bg-light dark:bg-dark text-dark dark:text-light animated-modal m-auto flex size-full max-h-[calc(100%-1rem)] max-w-[calc(100%-1rem)] flex-col overflow-y-hidden rounded shadow-md lg:max-w-[800px]"
      {...props}
    >
      <header className="text-light z-10 flex max-h-[50px] min-h-[50px] w-full items-center justify-between bg-gradient-to-b from-emerald-600 to-emerald-400 px-3.5 shadow-lg shadow-emerald-600/60">
        <ToggleModalButton
          action="close"
          className="transition-normal duration-100 hover:scale-120 active:scale-120"
        >
          <IoMdClose className="size-7 sm:size-6.5 md:size-7.5 lg:size-8" />
        </ToggleModalButton>

        <ThemeButton />
      </header>

      {children}
    </dialog>
  );
}

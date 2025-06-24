import { ThemeButton } from 'components/client/theme-button';
import { ToggleModalButton } from 'components/client/toggle-modal-button';
import { MODAL_ID } from 'constants/modal';
import { IoMdClose } from 'react-icons/io';
import { DefaultProps } from 'types/DefaultProps';

export default function RepositoryModalLayout({ children }: DefaultProps) {
  return (
    <dialog id={MODAL_ID} className="animated-modal">
      <div className="bg-light dark:bg-dark text-dark dark:text-light relative mx-auto mt-2 flex h-[calc(100%-1rem)] w-[calc(100%-1rem)] max-w-[700px] flex-col rounded-xl shadow-md ring-2 ring-emerald-400/70">
        <header className="text-light z-10 flex max-h-[50px] min-h-[50px] w-full items-center justify-between rounded-t-lg bg-gradient-to-b from-emerald-600 to-emerald-400 px-3.5 shadow-lg shadow-emerald-600/80">
          <ToggleModalButton
            action="close"
            className="transition-normal duration-100 hover:scale-120 active:scale-120"
          >
            <IoMdClose className="size-7 sm:size-6.5 md:size-7.5 lg:size-8" />
          </ToggleModalButton>

          <ThemeButton />
        </header>

        {children}
      </div>
    </dialog>
  );
}

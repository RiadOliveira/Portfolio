import { ThemeButton } from 'components/client/theme-button';
import { ToggleModalButton } from 'components/client/toggle-modal-button';
import { COLORS_DATA } from 'constants/colorsData';
import { MODAL_ID } from 'constants/modal';
import { IoMdClose } from 'react-icons/io';
import { DefaultProps } from 'types/DefaultProps';
import { mergeStyles } from 'utils/mergeStyles';

export default function RepositoryModalLayout({ children }: DefaultProps) {
  const { modal } = COLORS_DATA.emerald;

  return (
    <dialog id={MODAL_ID} className="animated-modal">
      <div className="bg-light dark:bg-dark text-dark dark:text-light shadow-light/50 dark:shadow-dark/50 relative mx-auto mt-2.5 flex h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] max-w-[700px] flex-col overflow-y-hidden rounded-xl shadow">
        <header
          className={mergeStyles(
            modal,
            'text-light z-10 flex max-h-[50px] min-h-[50px] w-full items-center justify-between rounded-t-lg bg-gradient-to-b px-3.5 shadow-md',
          )}
        >
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

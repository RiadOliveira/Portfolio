import { cn } from 'cn';
import { ThemeButton } from 'components/client/theme-button';
import { ToggleModalButton } from 'components/client/toggle-modal-button';
import { COLORS_DATA } from 'constants/colorsData';
import { MODAL_ID } from 'constants/modal';
import { redirect } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { DefaultProps } from 'types/DefaultProps';
import { RepositoryPageParams } from 'types/repository/RepositoryPageParams';
import { findRepositoryFromParams } from 'utils/findRepositoryFromParams';

type Props = DefaultProps & RepositoryPageParams;

export default async function RepositoryModalLayout({
  params,
  children,
}: Props) {
  const repository = await findRepositoryFromParams({ params });
  if (!repository) return redirect('/');

  const {
    displayData: { highlightColor },
  } = repository;
  const { modal } = COLORS_DATA[highlightColor];

  return (
    <dialog id={MODAL_ID} className="animated-modal">
      <div className="bg-light dark:bg-dark text-dark dark:text-light shadow-light/50 dark:shadow-dark/50 relative mx-auto mt-2.5 flex h-[calc(100%-1.25rem)] w-[calc(100%-1.25rem)] max-w-175 flex-col overflow-y-hidden rounded-xl shadow">
        <header
          className={cn(
            modal,
            'text-light z-10 flex max-h-12.5 min-h-12.5 w-full items-center justify-between rounded-t-lg bg-linear-to-b px-3.5 shadow-md',
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

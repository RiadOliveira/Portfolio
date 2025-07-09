import Link from 'next/link';

import { ToggleModalButton } from 'components/client/toggle-modal-button';
import { GITHUB_URLS } from 'constants/requests';
import { USER_DATA } from 'constants/userData';
import { FaGithub } from 'react-icons/fa';
import { IoReader } from 'react-icons/io5';
import { MdArrowBackIosNew } from 'react-icons/md';

type Props = {
  repositoryName: string;
};

export function ActionButtons({ repositoryName }: Props) {
  return (
    <div className="flex w-full justify-between pt-6.5 pr-1 pb-6 pl-2 md:px-3 lg:px-2 xl:px-2 xl:pt-10 2xl:px-1.5">
      <Link
        href="/"
        className="hover:bg-light/30 active:bg-light/30 size-10.5 rounded-md p-2 transition-normal duration-200 hover:scale-106 active:scale-106 xl:size-12"
      >
        <MdArrowBackIosNew className="mt-0.5 size-6 xl:size-7.5" />
      </Link>

      <div className="flex gap-4 md:gap-5">
        <ToggleModalButton
          action="show"
          className="bg-primary/90 flex h-10.5 items-center justify-center gap-2 rounded-md px-3 shadow transition-normal duration-200 hover:scale-106 active:scale-106 xl:h-12 xl:px-4"
        >
          <IoReader className="size-6 xl:size-7" />
          <span className="text-base font-semibold xl:-mt-0.5 xl:text-lg">
            Preview
          </span>
        </ToggleModalButton>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${GITHUB_URLS.default}/${USER_DATA.login}/${repositoryName}`}
          className="flex h-10.5 items-center justify-center gap-2 rounded-md bg-gray-800/90 px-3 shadow transition-normal duration-200 hover:scale-106 active:scale-106 xl:h-12 xl:px-4"
        >
          <FaGithub className="size-6 xl:size-7.5" />
          <span className="text-base font-semibold xl:text-lg">Github</span>
        </a>
      </div>
    </div>
  );
}

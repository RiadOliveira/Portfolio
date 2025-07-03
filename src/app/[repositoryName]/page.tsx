import Link from 'next/link';

import { MdArrowBackIosNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { IoReader } from 'react-icons/io5';
import { ImageContainer } from 'components/container/image-container';
import { ToggleModalButton } from 'components/client/toggle-modal-button';
import { MainTitle } from 'components/main-title';
import { TechnologyBadge } from 'components/repository/technology-badge';
import { USER_DATA } from 'constants/userData';
import { mergeStyles } from 'utils/mergeStyles';
import { COLORS_DATA } from 'constants/colorsData';
import { getRepositoriesData } from 'services/getRepositoriesData';
import { redirect } from 'next/navigation';
import { GITHUB_URLS } from 'constants/requests';
import { getRepositoryImageUrl } from 'utils/getRepositoryImageUrl';

type Props = {
  params: Promise<{ repositoryName: string }>;
};

export default async function RepositoryView({ params }: Props) {
  const { repositoryName } = await params;
  const repositories = await getRepositoriesData();

  const repository = repositories.find(({ name }) => name === repositoryName);
  if (!repository) return redirect('/');

  const { name, description, displayData } = repository;
  const { title, technologies, highlightColor } = displayData;
  const { container } = COLORS_DATA[highlightColor];

  return (
    <>
      <MainTitle>{title}</MainTitle>

      <section className="no-scrollbar scroll-fade relative flex flex-1 flex-col items-center justify-between overflow-y-scroll pt-3">
        <div className="flex flex-col items-center sm:max-w-[96%] lg:max-w-[99%]">
          <p className="mb-4.5 text-justify text-base lg:mb-6 lg:text-center lg:text-lg xl:mb-3.5 2xl:mb-7">
            {description}
          </p>

          <div
            className={mergeStyles(
              container,
              'border-light/40 w-full rounded-md border-1 shadow-md sm:w-11/12 lg:max-w-[560px] lg:border-2 2xl:max-w-[600px]',
            )}
          >
            <ImageContainer
              className="aspect-video overflow-hidden rounded-t-md shadow-md"
              src={getRepositoryImageUrl(displayData)}
              alt={name}
              quality={100}
              sizes={{
                widthThreshholds: { sm: '100%' },
                defaultSize: '91.6667%',
              }}
            />

            <div className="flex w-full flex-wrap justify-center gap-2 rounded-b-md p-3 2xl:gap-3 2xl:p-4">
              {technologies.map((technology) => (
                <TechnologyBadge key={technology} technology={technology} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between px-2 pt-6.5 pb-6 max-lg:max-w-[350px] lg:max-w-[400px]">
          <Link
            href="/"
            className="hover:bg-light/30 active:bg-light/30 size-10 rounded-md p-2 transition-normal duration-200 hover:scale-105 active:scale-105 lg:size-12"
          >
            <MdArrowBackIosNew className="size-6 max-lg:-ml-0.5 lg:mt-0.5 lg:size-7.5" />
          </Link>

          <ToggleModalButton
            action="show"
            className="bg-primary/90 flex h-10 items-center justify-center gap-2 rounded-md px-3 shadow transition-normal duration-200 hover:scale-105 active:scale-105 lg:h-12 lg:px-4"
          >
            <IoReader className="size-6 lg:size-7" />
            <span className="text-base font-semibold lg:-mt-0.5 lg:text-lg">
              Preview
            </span>
          </ToggleModalButton>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${GITHUB_URLS.default}/${USER_DATA.login}/${name}`}
            className="flex h-10 items-center justify-center gap-2 rounded-md bg-gray-800/90 px-3 shadow transition-normal duration-200 hover:scale-105 active:scale-105 lg:h-12 lg:px-4"
          >
            <FaGithub className="size-6 lg:size-7.5" />
            <span className="text-base font-semibold lg:text-lg">Github</span>
          </a>
        </div>
      </section>
    </>
  );
}

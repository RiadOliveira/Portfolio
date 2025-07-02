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

interface RepositoryViewParams {
  params: Promise<{ repositoryName: string }>;
}

export default async function RepositoryView({ params }: RepositoryViewParams) {
  const { repositoryName } = await params;
  const repositories = await getRepositoriesData();

  const { name, description, displayData } = repositories.find(
    ({ name }) => name === repositoryName,
  )!;
  const { container } = COLORS_DATA[displayData.highlightColor];

  return (
    <>
      <MainTitle>{name}</MainTitle>

      <section className="no-scrollbar sm:scroll-fade relative flex flex-1 flex-col items-center justify-between overflow-y-scroll pt-3">
        <div className="flex flex-col items-center sm:max-w-[96%] lg:max-w-[99%]">
          <p className="mb-4.5 text-justify text-base lg:mb-6 lg:text-center lg:text-lg xl:mb-3.5 2xl:mb-8 2xl:text-xl">
            {description}
          </p>

          <ImageContainer
            className={mergeStyles(
              container,
              'border-light/40 aspect-video w-full overflow-hidden rounded-t-md border-x-1 border-t-1 shadow-md sm:w-11/12 lg:max-w-[560px] lg:border-x-2 lg:border-t-2 2xl:max-w-[700px]',
            )}
            src={`https://user-images.githubusercontent.com/${USER_DATA.id}/${displayData.coverImage}`}
            alt={name}
            sizes={{
              widthThreshholds: {
                sm: '100%',
              },
              defaultSize: '91.6667%',
            }}
          />

          <div
            className={mergeStyles(
              container,
              'border-light/40 flex w-full flex-wrap justify-center gap-2 rounded-b-md border-x-1 border-b-1 p-3 shadow-md sm:w-11/12 lg:max-w-[560px] lg:border-x-2 lg:border-b-2 2xl:max-w-[700px]',
            )}
          >
            {displayData.technologies.map((technology) => (
              <TechnologyBadge key={technology} technology={technology} />
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between px-2 pt-6.5 pb-6 max-lg:max-w-[350px] lg:max-w-[400px] 2xl:max-w-[450px]">
          <Link
            href="/"
            className="hover:bg-light/30 active:bg-light/30 size-10 rounded-md p-2 transition-normal duration-200 hover:scale-105 active:scale-105 lg:size-12 2xl:size-[52px]"
          >
            <MdArrowBackIosNew className="size-6 max-lg:-ml-0.5 lg:mt-0.5 lg:size-7.5 2xl:mt-1 2xl:ml-0.5" />
          </Link>

          <ToggleModalButton
            action="show"
            className="bg-primary/90 flex h-10 items-center justify-center gap-2 rounded-md px-3 shadow transition-normal duration-200 hover:scale-105 active:scale-105 lg:h-12 lg:px-4 2xl:h-[52px] 2xl:px-5"
          >
            <IoReader className="size-6 lg:size-7 2xl:size-8" />
            <span className="text-base font-semibold lg:-mt-0.5 lg:text-lg 2xl:text-xl">
              Preview
            </span>
          </ToggleModalButton>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/RiadOliveira/${name}`}
            className="flex h-10 items-center justify-center gap-2 rounded-md bg-gray-800/90 px-3 shadow transition-normal duration-200 hover:scale-105 active:scale-105 lg:h-12 lg:px-4 2xl:h-[52px] 2xl:px-5"
          >
            <FaGithub className="size-6 lg:size-7.5 2xl:size-8" />
            <span className="text-base font-semibold lg:text-lg 2xl:text-xl">
              Github
            </span>
          </a>
        </div>
      </section>
    </>
  );
}

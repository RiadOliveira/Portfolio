import Link from 'next/link';

import { USER } from 'constants/user';
import { RepositoryData } from 'types/RepositoryData';
import { MdArrowBackIosNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { IoReader } from 'react-icons/io5';
import { ImageContainer } from 'components/container/image-container';
import { ToggleModalButton } from 'components/client/toggle-modal-button';
import { MainTitle } from 'components/main-title';
import { TechnologyBadge } from 'components/repository/technology-badge';

interface RepositoryViewParams {
  params: Promise<{ repository: string }>;
}

const EXAMPLE_REPOSITORY: RepositoryData = {
  id: 0,
  name: 'Tradelous-Desktop',
  description:
    'An app developed in order to provide an easy way to manage stocks and sales of varied companies.',
  displayData: {
    coverImage: '147826010-25e9ef50-474a-49a8-b486-3ead4bed8105.png',
    technologyIds: [0, 1, 2],
  },
} as const;

export default async function RepositoryView({ params }: RepositoryViewParams) {
  const { repository } = await params;

  return (
    <>
      <MainTitle>{repository}</MainTitle>

      <section className="no-scrollbar relative mt-3 flex flex-1 flex-col items-center justify-between overflow-y-scroll">
        <div>
          <p className="mb-4.5 text-justify text-base">
            {EXAMPLE_REPOSITORY.description}
          </p>

          <ImageContainer
            className="border-light/40 aspect-video w-full max-w-4xl overflow-hidden rounded-t-md border-x-1 border-t-1 bg-emerald-500/45 shadow-md lg:w-4xl"
            src={`https://user-images.githubusercontent.com/${USER.id}/${EXAMPLE_REPOSITORY.displayData.coverImage}`}
            alt={EXAMPLE_REPOSITORY.name}
            sizes={{
              widthThreshholds: { lg: '56rem' },
              defaultSize: '100%',
            }}
          />

          <div className="border-light/40 flex flex-wrap justify-center gap-2 rounded-b-md border-x-1 border-b-1 bg-emerald-500/45 py-3 shadow-md">
            <TechnologyBadge technology="React" />
            <TechnologyBadge technology="NodeJs" />
            <TechnologyBadge technology="Expo" />
            <TechnologyBadge technology="C" />
            <TechnologyBadge technology="C++" />
          </div>
        </div>

        <div className="flex w-full max-w-80 justify-between px-[3px] pt-6.5 pb-6">
          <Link
            href="/"
            className="hover:bg-light/30 active:bg-light/30 size-10 rounded-md p-2 transition-normal duration-200 hover:scale-105 active:scale-105"
          >
            <MdArrowBackIosNew size={24} className="-ml-0.5" />
          </Link>

          <ToggleModalButton
            action="show"
            className="bg-primary/90 flex h-10 items-center justify-center gap-2 rounded-md px-3 shadow transition-normal duration-200 hover:scale-105 active:scale-105"
          >
            <IoReader size={24} />
            <span className="text-base font-semibold">Preview</span>
          </ToggleModalButton>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/RiadOliveira/${EXAMPLE_REPOSITORY.name}`}
            className="flex h-10 items-center justify-center gap-2 rounded-md bg-gray-800/90 px-3 shadow transition-normal duration-200 hover:scale-105 active:scale-105"
          >
            <FaGithub size={24} />
            <span className="text-base font-semibold">Github</span>
          </a>
        </div>
      </section>
    </>
  );
}

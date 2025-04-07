import Link from 'next/link';

import { ImageContainer } from 'components/utilities/image-container';
import { MainTitle } from 'components/utilities/main-title';
import { USER } from 'constants/user';
import { RepositoryData } from 'types/RepositoryData';
import { TechnologyBadge } from 'components/utilities/technology-badge';
import { IoReader } from 'react-icons/io5';
import { MdArrowBackIosNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

type Params = {
  params: Promise<{ repository: string }>;
};

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

export default async function RepositoryView({ params }: Params) {
  const { repository } = await params;

  return (
    <>
      <MainTitle>{repository}</MainTitle>

      <section className="relative pt-2 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-base text-justify mb-4.5">{EXAMPLE_REPOSITORY.description}</p>

          <ImageContainer
            className="bg-emerald-500/60 border-t-1 border-x-1 border-light/40 shadow-md rounded-t-md overflow-hidden aspect-video w-full max-w-4xl lg:w-4xl"
            src={`https://user-images.githubusercontent.com/${USER.id}/${EXAMPLE_REPOSITORY.displayData.coverImage}`}
            alt={EXAMPLE_REPOSITORY.name}
            sizes={{ definitions: [{ threshold: 'LG', value: '56rem' }], defaultValue: '100%' }}
          />

          <div className="bg-emerald-500/60 shadow-md flex flex-wrap border-x-1 border-b-1 border-light/40 rounded-b-md py-3 gap-2 justify-center">
            <TechnologyBadge technology="React" />
            <TechnologyBadge technology="NodeJs" />
            <TechnologyBadge technology="Expo" />
            <TechnologyBadge technology="C" />
            <TechnologyBadge technology="C++" />
          </div>
        </div>

        <div className="flex justify-end gap-6 sm:justify-center sm:pt-10">
          <Link
            href="/"
            className="size-10 p-2 rounded-md hover:bg-light/30 active:bg-light/30 transition-colors duration-400"
          >
            <MdArrowBackIosNew className="size-6 -ml-0.5" />
          </Link>

          <a
            href={`https://github.com/RiadOliveira/${EXAMPLE_REPOSITORY.name}`}
            target="_blank"
            className="bg-violet-700 h-10 px-3 flex items-center justify-center gap-2 rounded-md hover:scale-105 active:scale-105 transition-normal duration-200"
          >
            <IoReader size={24} />
            <span className="text-base font-semibold">Preview</span>
          </a>

          <button className="bg-gray-800 h-10 px-3 flex items-center justify-center gap-2 rounded-md hover:scale-105 active:scale-105 transition-normal duration-200">
            <FaGithub size={24} />
            <span className="text-base font-semibold">Github</span>
          </button>
        </div>
      </section>
    </>
  );
}

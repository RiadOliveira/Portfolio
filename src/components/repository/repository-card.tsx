import Link from 'next/link';

import { RepositoryData } from 'types/RepositoryData';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { USER } from 'constants/user';
import { ImageContainer } from '../container/image-container';

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

export function RepositoryCard() {
  return (
    <Link
      href={`/${EXAMPLE_REPOSITORY.name}`}
      className="block snap-center space-y-2 rounded-lg bg-gradient-to-br from-emerald-600/60 from-70% pb-4 shadow-md duration-200 hover:scale-104 hover:from-emerald-600/80 hover:shadow-lg active:scale-104 active:from-emerald-600/80 active:shadow-lg"
    >
      <ImageContainer
        className="aspect-video w-full max-w-4xl overflow-hidden rounded-t-md rounded-br-4xl shadow lg:w-4xl"
        src={`https://user-images.githubusercontent.com/${USER.id}/${EXAMPLE_REPOSITORY.displayData.coverImage}`}
        alt={EXAMPLE_REPOSITORY.name}
        sizes={{ definitions: [{ threshold: 'LG', value: '56rem' }], defaultValue: '100%' }}
      />

      <div className="flex items-center justify-between px-3">
        <h1 className="text-base">{EXAMPLE_REPOSITORY.name}</h1>

        <div className="flex gap-2">
          <FaReact size={22} color="white" />
          <FaNodeJs size={22} color="white" />
        </div>
      </div>

      <p className="px-3 text-justify">{EXAMPLE_REPOSITORY.description}</p>
    </Link>
  );
}

import { USER } from 'constants/user';
import { RepositoryData } from 'types/RepositoryData';
import { ImageContainer } from './ImageContainer';
import { FaNodeJs, FaReact } from 'react-icons/fa';

const EXAMPLE_REPOSITORY: RepositoryData = {
  id: 0,
  name: 'Tradelous Desktop',
  description:
    'An app developed in order to provide an easy way to manage stocks and sales of varied companies.',
  displayData: {
    coverImage: '147826010-25e9ef50-474a-49a8-b486-3ead4bed8105.png',
    technologyIds: [0, 1, 2],
  },
} as const;

export async function Main() {
  return (
    <main className="w-[calc(100%-1rem)] flex flex-col flex-1 items-center mb-2 mx-auto py-3 px-6 rounded-md">
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="text-lg">{EXAMPLE_REPOSITORY.name}</h1>

        <div className="flex gap-2 border-2 border-zinc-400 p-2 rounded">
          <FaReact size={24} color="blue" />
          <FaNodeJs size={24} color="green" />
        </div>
      </div>

      <ImageContainer
        className="rounded-xl overflow-hidden aspect-video w-full max-w-4xl lg:w-4xl"
        src={`https://user-images.githubusercontent.com/${USER.ID}/${EXAMPLE_REPOSITORY.displayData.coverImage}`}
        alt={EXAMPLE_REPOSITORY.name}
        sizes={{ definitions: [{ threshold: 'LG', value: '56rem' }], defaultValue: '100%' }}
      />

      <p>{EXAMPLE_REPOSITORY.description}</p>
    </main>
  );
}

import { RepositoryData } from 'types/RepositoryData';
import { ImageContainer } from '../ImageContainer';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { USER } from 'constants/user';

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

export function Repository() {
  return (
    <div className="pt-3 border-2 border-zinc-400 rounded-md space-y-2">
      <div className="flex px-3 items-center justify-between">
        <h1>{EXAMPLE_REPOSITORY.name}</h1>

        <div className="flex gap-2">
          <FaReact size={24} color="blue" />
          <FaNodeJs size={24} color="green" />
        </div>
      </div>

      <p className="px-3 text-justify">{EXAMPLE_REPOSITORY.description}</p>

      <ImageContainer
        className="rounded-b-sm overflow-hidden aspect-video w-full max-w-4xl lg:w-4xl"
        src={`https://user-images.githubusercontent.com/${USER.ID}/${EXAMPLE_REPOSITORY.displayData.coverImage}`}
        alt={EXAMPLE_REPOSITORY.name}
        sizes={{ definitions: [{ threshold: 'LG', value: '56rem' }], defaultValue: '100%' }}
      />
    </div>
  );
}

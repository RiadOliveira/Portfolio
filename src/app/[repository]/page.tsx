import Link from 'next/link';

import { ImageContainer } from 'components/utilities/image-container';
import { MainTitle } from 'components/utilities/main-title';
import { USER } from 'constants/user';
import { RepositoryData } from 'types/RepositoryData';
import { TechnologyBadge } from 'components/utilities/technology-badge';

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

      <section className="relative pt-2 flex-1">
        <p className="text-base text-justify mb-4">{EXAMPLE_REPOSITORY.description}</p>

        <ImageContainer
          className="bg-emerald-600/60 border-t-1 border-x-1 border-light/40 shadow-md rounded-t-md overflow-hidden aspect-video w-full max-w-4xl lg:w-4xl"
          src={`https://user-images.githubusercontent.com/${USER.id}/${EXAMPLE_REPOSITORY.displayData.coverImage}`}
          alt={EXAMPLE_REPOSITORY.name}
          sizes={{ definitions: [{ threshold: 'LG', value: '56rem' }], defaultValue: '100%' }}
        />

        <div className="bg-emerald-600/60 shadow-md flex flex-wrap border-x-1 border-b-1 border-light/40 rounded-b-md py-3 gap-2 justify-center">
          <TechnologyBadge technology="React" />
          <TechnologyBadge technology="NodeJs" />
          <TechnologyBadge technology="Expo" />
          <TechnologyBadge technology="C" />
          <TechnologyBadge technology="C++" />
        </div>

        <div className="absolute bottom-0 w-full flex justify-between">
          <Link href="/" className="flex justify-center py-2.5 gap-3 w-5/12 rounded bg-dark">
            Go Back
          </Link>
        </div>
      </section>
    </>
  );
}

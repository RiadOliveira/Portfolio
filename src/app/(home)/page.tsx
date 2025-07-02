import { MainTitle } from 'components/main-title';
import { RepositoryCard } from 'components/repository/repository-card';
import { getPortfolioData } from 'services/getPortfolioData';
import { RepositoryData } from 'types/repository/RepositoryData';

const EXAMPLE_REPOSITORY: RepositoryData = {
  id: 0,
  name: 'Tradelous-Desktop',
  description:
    'An app developed in order to provide an easy way to manage stocks and sales of varied companies.',
  displayData: {
    coverImage: '147826010-25e9ef50-474a-49a8-b486-3ead4bed8105.png',
    technologies: ['NodeJs', 'React', 'Ubuntu'],
    highlightColor: 'emerald',
  },
} as const;

export default async function Home() {
  const repositories = await getPortfolioData();

  return (
    <>
      <MainTitle>Portfolio Projects</MainTitle>

      <section className="no-scrollbar scroll-fade mt-[3px] flex w-full snap-y flex-wrap gap-6.5 overflow-y-scroll px-2.5 pt-2.5 pb-8 max-2xl:justify-center max-lg:justify-center sm:gap-4.5 sm:px-6 sm:pt-3 lg:mt-2 2xl:gap-6.5">
        {[
          EXAMPLE_REPOSITORY,
          { ...EXAMPLE_REPOSITORY, id: 1 },
          { ...EXAMPLE_REPOSITORY, id: 2 },
        ].map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </section>
    </>
  );
}

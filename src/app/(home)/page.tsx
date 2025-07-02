import { MainTitle } from 'components/main-title';
import { RepositoryCard } from 'components/repository/repository-card';
import { getRepositoriesData } from 'services/getRepositoriesData';

export default async function Home() {
  const repositories = await getRepositoriesData();

  return (
    <>
      <MainTitle>Portfolio Projects</MainTitle>

      <section className="no-scrollbar scroll-fade mt-[3px] flex w-full snap-y flex-wrap gap-6.5 overflow-y-scroll px-2.5 pt-2.5 pb-8 max-2xl:justify-center max-lg:justify-center sm:gap-4.5 sm:px-6 sm:pt-3 lg:mt-2 2xl:gap-6.5">
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </section>
    </>
  );
}

import { MainTitle } from 'components/main-title';
import { RepositoryCard } from 'components/repository/repository-card';

export default function Home() {
  return (
    <>
      <MainTitle>Portfolio Projects</MainTitle>

      <section className="no-scrollbar scroll-fade mt-[3px] flex w-full snap-y snap-proximity flex-wrap gap-6.5 overflow-y-scroll px-2.5 pt-4 pb-8 max-xl:justify-center lg:mt-2">
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </section>
    </>
  );
}

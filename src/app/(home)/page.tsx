import { MainTitle } from 'components/main-title';
import { RepositoryCard } from 'components/repository/repository-card';

export default function Home() {
  return (
    <>
      <MainTitle>Portfolio Projects</MainTitle>

      <section className="no-scrollbar scroll-fade mt-1 snap-y snap-proximity space-y-6.5 overflow-y-scroll px-2.5 py-4">
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </section>
    </>
  );
}

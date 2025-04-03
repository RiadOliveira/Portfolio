import { MainTitle } from 'components/main-title';
import { RepositoryCard } from 'components/repository-card';

export default function Home() {
  return (
    <>
      <MainTitle>Portfolio Projects</MainTitle>

      <section className="px-2.5 space-y-6">
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </section>
    </>
  );
}

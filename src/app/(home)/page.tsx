import { MainTitle } from 'components/main-title';
import { RepositoryCard } from 'components/repository/repository-card';

export default function Home() {
  return (
    <>
      <MainTitle>Portfolio Projects</MainTitle>

      <section className="space-y-6 px-2.5 pt-5.5">
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </section>
    </>
  );
}

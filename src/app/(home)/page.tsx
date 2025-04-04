import { MainTitle } from 'components/utilities/main-title';
import { RepositoryCard } from 'components/utilities/repository-card';

export default function Home() {
  return (
    <>
      <MainTitle>Portfolio Projects</MainTitle>

      <section className="pt-5.5 px-2.5 space-y-6">
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </section>
    </>
  );
}

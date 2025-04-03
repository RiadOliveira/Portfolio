import { MainTitle } from 'components/main-title';
import { ProjectCard } from 'components/project-card';

export default function Home() {
  return (
    <>
      <MainTitle>Portfolio Projects</MainTitle>

      <section className="px-2 space-y-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </>
  );
}

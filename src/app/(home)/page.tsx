import type { Repository } from '@/types/repository';
import type { Technology } from '@/types/repository/technology';

import { COLORS_DATA } from '@/constants/colorsData';
import { URL_GENERATOR } from '@/utils/urlGenerator';
import { TECHNOLOGIES_DATA } from '@/constants/technologiesData';
import { cn } from 'cn';
import { getShowcasedRepositories } from '@/services/getShowcasedRepositories';

import Link from 'next/link';
import MainTitle from '@/components/mainTitle';
import ImageContainer from '@/components/imageContainer';

export default async function Page() {
  const repositories = await getShowcasedRepositories();

  return (
    <>
      <MainTitle>Portfolio Projects</MainTitle>

      <section className="no-scrollbar scroll-fade mt-0.75 flex w-full snap-y flex-wrap gap-6.5 overflow-y-scroll px-2.5 pt-2.5 pb-8 max-2xl:justify-center max-lg:justify-center sm:gap-4.5 sm:px-6 sm:pt-3 lg:mt-2 2xl:gap-6.5">
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </section>
    </>
  );
}

function RepositoryCard({ repository }: { repository: Repository }) {
  const { name, description, showcase } = repository;
  const { card } = COLORS_DATA[showcase.highlightColor];

  return (
    <div className="snap-center scroll-mt-2.5 max-xl:first:pt-1 sm:snap-start sm:scroll-mt-3">
      <Link
        href={`/${name}`}
        className={cn(
          card,
          'block max-w-96 space-y-2 rounded-lg bg-linear-to-br from-70% pb-4 shadow-md duration-200 hover:scale-102 hover:shadow-lg active:scale-102 active:shadow-lg',
        )}
      >
        <ImageContainer
          className="aspect-video w-full overflow-hidden rounded-t-md rounded-br-4xl shadow lg:max-w-96"
          src={URL_GENERATOR.repositoryImage(showcase)}
          alt={name}
          sizes={{
            defaultSize: '24rem',
            widthThreshholds: { lg: '100%' },
          }}
        />

        <div className="flex items-center justify-between px-3">
          <h1 className="m-0 text-base font-semibold">{showcase.title}</h1>

          <TechnologyIcons technologies={showcase.technologies} />
        </div>

        <p className="px-3 text-justify text-[15px] leading-6">{description}</p>
      </Link>
    </div>
  );
}

function TechnologyIcons({ technologies }: { technologies: Technology[] }) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 2 }).map((_, index) => {
        const technology = technologies[index];
        if (!technology) return undefined;

        const { Icon } = TECHNOLOGIES_DATA[technology];
        return (
          <Icon key={technology} className="size-6 rounded-xs text-white" />
        );
      })}
    </div>
  );
}

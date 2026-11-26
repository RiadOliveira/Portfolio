import type { Technology } from '@/types/repository/technology';
import type { RepositoryPageParams } from '@/types/repository/pageParams';

import { COLORS_DATA } from '@/constants/colorsData';
import { URL_GENERATOR } from '@/utils/urlGenerator';
import { IoReader } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { MdArrowBackIosNew } from 'react-icons/md';
import { cn } from 'cn';
import { redirect } from 'next/navigation';
import { findRepositoryFromParams } from '@/utils/findRepositoryFromParams';

import Link from 'next/link';
import Image from 'next/image';
import MainTitle from '@/components/mainTitle';
import ImageContainer from '@/components/imageContainer';
import ToggleModalButton from '@/components/button/toggleModal';
import RepositoryFeatures from './_features';

export default async function Page(params: RepositoryPageParams) {
  const repository = await findRepositoryFromParams(params);
  if (!repository) return redirect('/');

  const { name, showcase } = repository;
  const { container, icon } = COLORS_DATA[showcase.highlightColor];

  return (
    <>
      <MainTitle>{showcase.title}</MainTitle>

      <section className="no-scrollbar scroll-fade relative flex flex-1 flex-col items-center justify-between overflow-y-scroll pt-3 max-sm:px-1.5">
        <div className="flex flex-col items-center sm:max-w-[96%] lg:max-w-[98.5%]">
          <p className="mb-4.5 text-base text-pretty lg:mb-6 lg:text-lg xl:mb-3.5 2xl:mb-7">
            {showcase.extendedDescription}
          </p>

          <div className="flex items-center gap-4 max-xl:flex-col">
            <div
              className={cn(
                container,
                'border-light/40 w-full rounded-md border shadow-md lg:max-w-135 lg:border-2 xl:max-w-137.5',
              )}
            >
              <ImageContainer
                src={URL_GENERATOR.repositoryImage(showcase)}
                alt={name}
                sizes={{ defaultSize: '100%' }}
                loading="eager"
                fetchPriority="high"
                className="aspect-video overflow-hidden rounded-t-md shadow-md"
              />

              <TechnologyBadges technologies={showcase.technologies} />
            </div>

            <RepositoryFeatures
              features={showcase.features}
              iconStyles={icon}
            />
          </div>
        </div>

        <ActionButtons repositoryName={name} />
      </section>
    </>
  );
}

function TechnologyBadges({ technologies }: { technologies: Technology[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 rounded-b-md p-3 xl:h-27 2xl:gap-3 2xl:p-4">
      {technologies.map((technology) => (
        <Image
          key={technology}
          src={URL_GENERATOR.technologyBadge(technology)}
          alt={technology}
          width={100}
          height={28}
          className="h-7 w-auto rounded shadow 2xl:h-8"
          unoptimized
        />
      ))}
    </div>
  );
}

function ActionButtons({ repositoryName }: { repositoryName: string }) {
  return (
    <div className="flex w-full justify-between pt-6.5 pb-6 pl-1 md:px-3 lg:px-2 xl:px-2 xl:pt-10 2xl:px-1.5">
      <Link
        href="/"
        className="hover:bg-light/30 active:bg-light/30 size-10.5 rounded-md p-2 transition-normal duration-200 hover:scale-106 active:scale-106 xl:size-12"
      >
        <MdArrowBackIosNew className="mt-0.5 size-6 xl:size-7.5" />
      </Link>

      <div className="flex gap-4 md:gap-5">
        <ToggleModalButton
          action="open"
          className="bg-primary/90 flex h-10.5 items-center justify-center gap-2 rounded-md px-3 shadow transition-normal duration-200 hover:scale-106 active:scale-106 xl:h-12 xl:px-4"
        >
          <IoReader className="size-6 xl:size-7" />

          <span className="text-base font-semibold xl:-mt-0.5 xl:text-lg">
            Preview
          </span>
        </ToggleModalButton>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={URL_GENERATOR.repositoryPage(repositoryName)}
          className="flex h-10.5 items-center justify-center gap-2 rounded-md bg-gray-800/90 px-3 shadow transition-normal duration-200 hover:scale-106 active:scale-106 xl:h-12 xl:px-4"
        >
          <FaGithub className="size-6 xl:size-7.5" />
          <span className="text-base font-semibold xl:text-lg">Github</span>
        </a>
      </div>
    </div>
  );
}

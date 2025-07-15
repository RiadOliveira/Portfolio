import Link from 'next/link';

import { ImageContainer } from '../container/image-container';
import { RepositoryData } from 'types/repository/RepositoryData';
import { COLORS_DATA } from 'constants/colorsData';
import { mergeStyles } from 'utils/mergeStyles';
import { TechnologyIcons } from './technology-icons';
import { getRepositoryImageUrl } from 'utils/getRepositoryImageUrl';

interface RepositoryCardProps {
  repository: RepositoryData;
}

export function RepositoryCard({
  repository: { name, description, displayData },
}: RepositoryCardProps) {
  const { title, technologies, highlightColor } = displayData;
  const { card } = COLORS_DATA[highlightColor];

  return (
    <div className="snap-center scroll-mt-2.5 max-xl:first:pt-1 sm:snap-start sm:scroll-mt-3">
      <Link
        href={`/${name}`}
        className={mergeStyles(
          card,
          'block max-w-96 space-y-2 rounded-lg bg-gradient-to-br from-70% pb-4 shadow-md duration-200 hover:scale-102 hover:shadow-lg active:scale-102 active:shadow-lg',
        )}
      >
        <ImageContainer
          className="aspect-video w-full overflow-hidden rounded-t-md rounded-br-4xl shadow lg:max-w-96"
          src={getRepositoryImageUrl(displayData)}
          alt={name}
          quality={100}
          sizes={{
            defaultSize: '24rem',
            widthThreshholds: { lg: '100%' },
          }}
        />

        <div className="flex items-center justify-between px-3">
          <h1 className="m-0 text-base font-semibold">{title}</h1>

          <TechnologyIcons technologies={technologies} />
        </div>

        <p className="px-3 text-justify">{description}</p>
      </Link>
    </div>
  );
}

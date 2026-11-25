import type { Technology } from '@/types/repository/technology';

import { generateTechnologyBadgeURL } from '@/utils/generateTechnologyBadgeURL';

import Image from 'next/image';

type Props = {
  technologies: Technology[];
};

export function TechnologyBadges({ technologies }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 rounded-b-md p-3 xl:h-[108px] 2xl:gap-3 2xl:p-4">
      {technologies.map((technology) => (
        <Image
          key={technology}
          src={generateTechnologyBadgeURL(technology)}
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

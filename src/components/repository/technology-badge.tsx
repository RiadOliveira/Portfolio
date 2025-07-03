import { TECHNOLOGIES_DATA } from 'constants/technologiesData';
import Image from 'next/image';

import { Technology } from 'types/technology/Technology';
import { generateBadgeFullURL } from 'utils/generateBadgeFullURL';

interface TechnologyBadgeProps {
  technology: Technology;
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  const { badgeComponents } = TECHNOLOGIES_DATA[technology];

  return (
    <Image
      src={generateBadgeFullURL(badgeComponents)}
      alt={technology}
      width={100}
      height={28}
      className="h-7 w-auto rounded shadow 2xl:h-9"
      unoptimized
    />
  );
}

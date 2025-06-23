import Image from 'next/image';
import { Technology, TECHNOLOGY_BADGES } from 'constants/technologyBadges';

interface TechnologyBadgeProps {
  technology: Technology;
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  return (
    <Image
      src={TECHNOLOGY_BADGES[technology]}
      alt={technology}
      className="h-9 w-auto rounded-[2px] shadow"
    />
  );
}

import Image from 'next/image';
import { Technology, TECHNOLOGY_BADGES } from 'constants/technologyBadges';

type Props = {
  technology: Technology;
};

export function TechnologyBadge({ technology }: Props) {
  return (
    <Image src={TECHNOLOGY_BADGES[technology]} alt={technology} className="rounded-[2px] shadow" />
  );
}

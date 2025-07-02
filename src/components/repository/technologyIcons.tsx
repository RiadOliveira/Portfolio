import { TECHNOLOGIES_DATA } from 'constants/technologiesData';
import { Technology } from 'types/technology/Technology';

const TECHNOLOGY_INDICES = [0, 1, 2, 3] as const;

interface TechnologyIconsProps {
  technologies: Technology[];
}

export function TechnologyIcons({ technologies }: TechnologyIconsProps) {
  return TECHNOLOGY_INDICES.map((index) => {
    const technology = technologies[index];
    if (!technology) return undefined;

    const { Icon } = TECHNOLOGIES_DATA[technology];
    return (
      <Icon key={technology} size={22} className="rounded-[2px] text-white" />
    );
  });
}

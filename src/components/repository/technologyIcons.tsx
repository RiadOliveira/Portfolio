import type { Technology } from '@/types/repository/technology';

import { TECHNOLOGIES_DATA } from '@/constants/technologiesData';

const TECHNOLOGY_INDICES = [0, 1] as const;

type Props = { technologies: Technology[] };

export function TechnologyIcons({ technologies }: Props) {
  return (
    <div className="flex gap-2">
      {TECHNOLOGY_INDICES.map((index) => {
        const technology = technologies[index];
        if (!technology) return undefined;

        const { Icon } = TECHNOLOGIES_DATA[technology];
        return (
          <Icon key={technology} className="size-6 rounded-[2px] text-white" />
        );
      })}
    </div>
  );
}

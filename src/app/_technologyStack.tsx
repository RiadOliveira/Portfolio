import type { Technology } from '@/types/repository/technology';

import { TECHNOLOGIES_DATA } from '@/constants/technologiesData';

type Props = { technologies: Technology[] };

export default function TechnologyStack({ technologies }: Props) {
  return (
    <ul
      aria-label="Main technologies"
      className="border-light/35 bg-light/10 mt-3 flex w-fit items-center justify-center gap-3 rounded-full border px-4 py-2.5 shadow-md max-lg:hidden lg:gap-3.5 2xl:gap-4 2xl:px-5"
    >
      {technologies.map((technology) => {
        const { Icon } = TECHNOLOGIES_DATA[technology];

        return (
          <li key={technology}>
            <Icon
              title={technology}
              className="size-6 text-white/85 transition-colors duration-200 hover:text-white lg:size-7"
            />
          </li>
        );
      })}
    </ul>
  );
}

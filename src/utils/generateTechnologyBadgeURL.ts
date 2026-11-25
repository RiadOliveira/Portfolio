import type { Technology } from '@/types/technology/Technology';

import { TECHNOLOGIES_DATA } from '@/constants/technologiesData';

export function generateTechnologyBadgeURL(technology: Technology) {
  const {
    badgeComponents: { label, logo, logoColor },
  } = TECHNOLOGIES_DATA[technology];

  return `https://img.shields.io/badge/${label}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
}

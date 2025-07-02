import { BadgeComponents } from 'types/technology/BadgeComponents';

export function generateBadgeFullURL({
  label,
  logo,
  logoColor,
}: BadgeComponents) {
  return `https://img.shields.io/badge/${label}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
}

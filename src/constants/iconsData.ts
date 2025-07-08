import { FaBoxOpen, FaBuilding, FaUsers } from 'react-icons/fa';

import { IconType } from 'react-icons';
import { FeatureIcon } from 'types/repository/FeatureIcon';

type IconsData = { [key in FeatureIcon]: IconType };

export const ICONS_DATA: IconsData = {
  boxOpen: FaBoxOpen,
  building: FaBuilding,
  users: FaUsers,
} as const;

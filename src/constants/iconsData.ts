import {
  FaBoxOpen,
  FaBuilding,
  FaChartBar,
  FaDatabase,
  FaFileInvoiceDollar,
  FaQrcode,
  FaUsers,
} from 'react-icons/fa';

import { IconType } from 'react-icons';
import { FeatureIcon } from 'types/repository/FeatureIcon';

type IconsData = { [key in FeatureIcon]: IconType };

export const ICONS_DATA: IconsData = {
  boxOpen: FaBoxOpen,
  building: FaBuilding,
  users: FaUsers,
  qrcode: FaQrcode,
  database: FaDatabase,
  chartBar: FaChartBar,
  fileInvoiceDollar: FaFileInvoiceDollar,
} as const;

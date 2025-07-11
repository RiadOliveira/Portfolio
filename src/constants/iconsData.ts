import {
  FaBoxOpen,
  FaBriefcase,
  FaBuilding,
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaFileInvoiceDollar,
  FaQrcode,
  FaUsers,
  FaUserShield,
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
  briefcase: FaBriefcase,
  chartLine: FaChartLine,
  userShield: FaUserShield,
} as const;

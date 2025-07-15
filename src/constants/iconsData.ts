import {
  FaBoxOpen,
  FaBriefcase,
  FaBuilding,
  FaChartBar,
  FaChartLine,
  FaDatabase,
  FaFileExport,
  FaFileInvoiceDollar,
  FaQrcode,
  FaSearchLocation,
  FaUsers,
  FaUserShield,
  FaUserCircle,
  FaClock,
  FaCloud,
  FaImage,
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
  fileExport: FaFileExport,
  searchLocation: FaSearchLocation,
  userCircle: FaUserCircle,
  clock: FaClock,
  cloud: FaCloud,
  image: FaImage,
} as const;

import type { Feature } from './Feature';
import type { Technology } from '@/types/technology/Technology';
import type { HighlightColor } from './HighlightColor';

export type DisplayData = {
  title: string;
  extendedDescription: string;
  imageId: string;
  highlightColor: HighlightColor;
  technologies: Technology[];
  features: Feature[];
  attachmentsUrl?: true;
};

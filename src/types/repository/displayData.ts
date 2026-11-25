import type { Feature } from './feature';
import type { Technology } from '@/types/repository/technology';
import type { HighlightColor } from './highlightColor';

export type DisplayData = {
  title: string;
  extendedDescription: string;
  imageId: string;
  highlightColor: HighlightColor;
  technologies: Technology[];
  features: Feature[];
  attachmentsUrl?: true;
};

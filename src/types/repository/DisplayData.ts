import { Technology } from 'types/technology/Technology';
import { HighlightColor } from './HighlightColor';
import { Feature } from './Feature';

export type DisplayData = {
  title: string;
  extendedDescription: string;
  imageId: string;
  highlightColor: HighlightColor;
  technologies: Technology[];
  features: Feature[];
  attachmentsUrl?: true;
};

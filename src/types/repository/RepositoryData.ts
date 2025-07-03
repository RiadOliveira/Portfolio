import { Technology } from '../technology/Technology';
import { APIRepository } from './APIRepository';
import { HighlightColor } from './HighlightColor';

export type DisplayData = {
  title: string;
  imageId: string;
  highlightColor: HighlightColor;
  technologies: Technology[];
  attachmentsUrl?: true;
};

export type RepositoryData = Omit<APIRepository, 'owner'> & {
  displayData: DisplayData;
};

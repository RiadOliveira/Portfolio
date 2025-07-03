import { Technology } from '../technology/Technology';
import { APIRepository } from './APIRepository';
import { HighlightColor } from './HighlightColor';

export type DisplayData = {
  title: string;
  coverImage: string;
  highlightColor: HighlightColor;
  technologies: Technology[];
};

export type RepositoryData = Omit<APIRepository, 'owner'> & {
  displayData: DisplayData;
};

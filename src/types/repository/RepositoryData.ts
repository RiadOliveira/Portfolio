import { Technology } from '../technology/Technology';
import { APIRepository } from './APIRepository';
import { HighlightColor } from './HighlightColor';

export interface DisplayData {
  title: string;
  coverImage: string;
  highlightColor: HighlightColor;
  technologies: Technology[];
}

export interface RepositoryData extends Omit<APIRepository, 'owner'> {
  displayData: DisplayData;
}

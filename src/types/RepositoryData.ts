import { APIRepository } from './APIRepository';

export type DisplayData = {
  coverImage: string;
  technologies: string[];
};

export type RepositoryData = Omit<APIRepository, 'owner'> & {
  displayData: DisplayData;
};

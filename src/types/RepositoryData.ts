import { APIRepository } from './APIRepository';

export type DisplayData = {
  coverImage: string;
  technologyIds: number[];
};

export type RepositoryData = Omit<APIRepository, 'owner'> & {
  displayData: DisplayData;
};

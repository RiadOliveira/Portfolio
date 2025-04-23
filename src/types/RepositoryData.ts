import { APIRepository } from './APIRepository';

export interface DisplayData {
  coverImage: string;
  technologyIds: number[];
}

export interface RepositoryData extends Omit<APIRepository, 'owner'> {
  displayData: DisplayData;
}

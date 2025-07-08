import { APIRepository } from './APIRepository';
import { DisplayData } from './DisplayData';

export type RepositoryData = Omit<APIRepository, 'owner'> & {
  displayData: DisplayData;
};

import type { DisplayData } from './DisplayData';
import type { APIRepository } from './APIRepository';

export type RepositoryData = Omit<APIRepository, 'owner'> & {
  displayData: DisplayData;
};

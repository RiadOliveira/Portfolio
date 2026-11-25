import type { DisplayData } from './displayData';
import type { APIRepository } from './apiRepository';

export type RepositoryData = Omit<APIRepository, 'owner'> & {
  displayData: DisplayData;
};

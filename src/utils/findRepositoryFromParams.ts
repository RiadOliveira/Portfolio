import type { RepositoryPageParams } from '@/types/repository/repositoryPageParams';

import { getRepositoriesData } from '@/services/getRepositoriesData';

export async function findRepositoryFromParams({
  params,
}: RepositoryPageParams) {
  const { repositoryName } = await params;
  const repositories = await getRepositoriesData();

  return repositories.find(({ name }) => name === repositoryName);
}

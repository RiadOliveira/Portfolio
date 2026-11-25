import type { RepositoryPageParams } from '@/types/repository/pageParams';

import { getShowcasedRepositories } from '@/services/getShowcasedRepositories';

export async function findRepositoryFromParams({
  params,
}: RepositoryPageParams) {
  const { repositoryName } = await params;

  const repositories = await getShowcasedRepositories();
  return repositories.find(({ name }) => name === repositoryName);
}

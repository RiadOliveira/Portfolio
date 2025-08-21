import { getRepositoriesData } from 'services/getRepositoriesData';
import { RepositoryPageParams } from 'types/repository/RepositoryPageParams';

export async function findRepositoryFromParams({
  params,
}: RepositoryPageParams) {
  const { repositoryName } = await params;
  const repositories = await getRepositoriesData();

  return repositories.find(({ name }) => name === repositoryName);
}

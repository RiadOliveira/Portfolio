import { generateDisplayDataURL } from 'utils/generateDisplayDataURL';
import { fetchRepositories } from './fetchRepositories';
import { USER } from 'constants/user';
import { DisplayData, RepositoryData } from 'types/RepositoryData';
import { APIRepository } from 'types/APIRepository';
import { cachedJSONFetch } from 'utils/cachedJSONFetch';

export async function getPortfolioData() {
  const repositories = await fetchRepositories();

  const repositoriesDataPromises = repositories.map(generateRepositoryDataPromise);
  const promisesData = await Promise.all(repositoriesDataPromises);

  return promisesData.filter((data) => data !== undefined);
}

function generateRepositoryDataPromise({
  id,
  name,
  description,
  owner: { id: ownerId },
}: APIRepository) {
  if (ownerId !== USER.id || name === USER.login) return undefined;

  return cachedJSONFetch<DisplayData>(generateDisplayDataURL(name))
    .then((displayData) => ({ id, name, description, displayData }) as RepositoryData)
    .catch(() => undefined);
}

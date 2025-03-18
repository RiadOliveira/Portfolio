import { generateDisplayDataURL } from 'utils/generateDisplayDataURL';
import { fetchRepositories } from './fetchRepositories';
import { USER } from 'constants/user';
import { DisplayData, RepositoryData } from 'types/RepositoryData';
import { APIRepository } from 'types/APIRepository';
import { fetchTechnologies } from './fetchTechnologies';
import { cachedJSONFetch } from 'utils/cachedJSONFetch';

export async function getPortfolioData() {
  const technologiesPromise = fetchTechnologies();
  const repositories = await fetchRepositories();

  const repositoriesDataPromises = repositories.map(generateRepositoryDataPromise);
  const promisesData = await Promise.all(repositoriesDataPromises);

  const repositoriesData = promisesData.filter((data) => data !== undefined);
  const technologies = await technologiesPromise;

  return { repositoriesData, technologies };
}

function generateRepositoryDataPromise({
  id,
  name,
  description,
  owner: { id: ownerId },
}: APIRepository) {
  if (ownerId !== USER.ID || name === USER.LOGIN) return undefined;

  return cachedJSONFetch<DisplayData>(generateDisplayDataURL(name))
    .then((displayData) => ({ id, name, description, displayData }) as RepositoryData)
    .catch(() => undefined);
}

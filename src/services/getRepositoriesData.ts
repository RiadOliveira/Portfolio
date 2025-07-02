import { generateDisplayDataURL } from 'utils/generateDisplayDataURL';
import { fetchRepositories } from './fetchRepositories';
import { cachedJSONFetch } from 'utils/cachedJSONFetch';
import { APIRepository } from 'types/repository/APIRepository';
import { USER_DATA } from 'constants/userData';
import { DisplayData, RepositoryData } from 'types/repository/RepositoryData';

export async function getRepositoriesData() {
  const repositories = await fetchRepositories();
  const repositoriesDataPromises = repositories.map(
    generateRepositoryDataPromise,
  );
  const promisesData = await Promise.all(repositoriesDataPromises);

  return promisesData.filter((data) => data !== undefined);
}

function generateRepositoryDataPromise({
  id,
  name,
  description,
  owner: { id: ownerId },
}: APIRepository) {
  if (ownerId !== USER_DATA.id || name === USER_DATA.login) return undefined;

  return cachedJSONFetch<DisplayData>(generateDisplayDataURL(name))
    .then(
      (displayData) =>
        ({ id, name, description, displayData }) as RepositoryData,
    )
    .catch(() => undefined);
}

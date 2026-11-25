import type { DisplayData } from '@/types/repository/DisplayData';
import type { APIRepository } from '@/types/repository/APIRepository';
import type { RepositoryData } from '@/types/repository/RepositoryData';

import { USER_DATA } from '@/constants/userData';
import { cachedJSONFetch } from '@/utils/cachedJSONFetch';
import { fetchRepositories } from './fetchRepositories';
import { generateDisplayDataURL } from '@/utils/generateDisplayDataURL';

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

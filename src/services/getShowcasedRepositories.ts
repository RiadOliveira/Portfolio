import type {
  Repository,
  APIRepository,
  RepositoryShowcase,
} from '@/types/repository';

import { USER_DATA } from '@/constants/userData';
import { GITHUB_URLS } from '@/constants/githubURLs';
import { URL_GENERATOR } from '@/utils/urlGenerator';
import { cachedJSONFetch } from '@/utils/cachedJSONFetch';

export async function getShowcasedRepositories() {
  const repositories = await fetchAPIRepositories();
  const repositoriesDataPromises = repositories.map(
    generateRepositoryDataPromise,
  );
  const promisesData = await Promise.all(repositoriesDataPromises);

  return promisesData.filter((data) => data !== undefined);
}

function fetchAPIRepositories() {
  const queryParams = new URLSearchParams({
    type: 'all',
    sort: 'created',
    per_page: '100',
  });
  const API_URL =
    `${GITHUB_URLS.api}/${USER_DATA.login}/repos?${queryParams}` as const;

  const FETCH_PROPS = {
    headers: { Accept: 'application/vnd.github+json' },
  } as const;

  return cachedJSONFetch<APIRepository[]>(API_URL, FETCH_PROPS);
}

function generateRepositoryDataPromise({
  id,
  name,
  description,
  owner: { id: ownerId },
}: APIRepository) {
  if (ownerId !== USER_DATA.id || name === USER_DATA.login) return undefined;

  return cachedJSONFetch<RepositoryShowcase>(URL_GENERATOR.showcase(name))
    .then((showcase) => ({ id, name, description, showcase }) as Repository)
    .catch(() => undefined);
}

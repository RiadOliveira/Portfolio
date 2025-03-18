import { USER } from 'constants/user';
import { GITHUB_URLS } from 'constants/requests';
import { APIRepository } from 'types/APIRepository';
import { cachedJSONFetch } from 'utils/cachedJSONFetch';

export function fetchRepositories() {
  const queryParams = new URLSearchParams({
    type: 'all',
    sort: 'created',
    per_page: '100',
  });
  const API_URL = `${GITHUB_URLS.API}/${USER.LOGIN}/repos?${queryParams}` as const;

  const FETCH_PROPS = {
    headers: {
      Accept: 'application/vnd.github+json',
    },
  } as const;

  return cachedJSONFetch<APIRepository[]>(API_URL, FETCH_PROPS);
}

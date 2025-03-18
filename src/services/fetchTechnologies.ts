import { USER } from 'constants/user';
import { GITHUB_URLS } from 'constants/requests';
import { cachedJSONFetch } from 'utils/cachedJSONFetch';

export function fetchTechnologies() {
  return cachedJSONFetch<string[]>(
    `${GITHUB_URLS.CONTENT}/${USER.LOGIN}/${USER.LOGIN}/main/technologies.json`,
  );
}

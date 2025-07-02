import { GITHUB_URLS } from 'constants/requests';
import { USER_DATA } from 'constants/userData';
import { cachedJSONFetch } from 'utils/cachedJSONFetch';

export function fetchReadme(repositoryName: string) {
  return cachedJSONFetch<string>(
    `${GITHUB_URLS.content}/${USER_DATA.login}/${repositoryName}/main/README.md`,
    {},
    'TEXT',
  );
}

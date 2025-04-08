import { GITHUB_URLS } from 'constants/requests';
import { USER } from 'constants/user';
import { cachedJSONFetch } from 'utils/cachedJSONFetch';

export function fetchReadme(repositoryName: string) {
  return cachedJSONFetch<string>(
    `${GITHUB_URLS.content}/${USER.login}/${repositoryName}/main/README.md`,
    {},
    'TEXT',
  );
}

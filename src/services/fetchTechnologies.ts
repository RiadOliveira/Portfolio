import { GITHUB_URLS } from 'constants/urls';
import { USER } from 'constants/user';
import { Technologies } from 'types/Technologies';
import { cachedJSONFetch } from 'utils/cachedJSONFetch';

export function fetchTechnologies() {
  return cachedJSONFetch<Technologies>(
    `${GITHUB_URLS.CONTENT}/${USER.LOGIN}/${USER.LOGIN}/main/technologies.json`,
  );
}

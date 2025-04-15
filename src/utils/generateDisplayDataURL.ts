import { USER } from 'constants/user';
import { GITHUB_URLS } from 'constants/requests';

export function generateDisplayDataURL(repositoryName: string) {
  return `${GITHUB_URLS.content}/${USER.login}/${repositoryName}/main/displayData.json`;
}

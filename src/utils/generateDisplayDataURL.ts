import { GITHUB_URLS } from 'constants/urls';
import { USER } from 'constants/user';

export function generateDisplayDataURL(repositoryName: string) {
  return `${GITHUB_URLS.CONTENT}/${USER.LOGIN}/${repositoryName}/main/displayData.json`;
}

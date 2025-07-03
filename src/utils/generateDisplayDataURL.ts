import { GITHUB_URLS } from 'constants/requests';
import { USER_DATA } from 'constants/userData';

export function generateDisplayDataURL(repositoryName: string) {
  return `${GITHUB_URLS.content}/${USER_DATA.login}/${repositoryName}/main/.portfolio/displayData.json`;
}

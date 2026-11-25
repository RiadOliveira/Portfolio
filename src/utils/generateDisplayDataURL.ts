import { USER_DATA } from '@/constants/userData';
import { GITHUB_URLS } from '@/constants/requests';

export function generateDisplayDataURL(repositoryName: string) {
  return `${GITHUB_URLS.content}/${USER_DATA.login}/${repositoryName}/main/.portfolio/displayData.json`;
}

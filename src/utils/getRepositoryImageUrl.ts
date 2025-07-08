import { GITHUB_URLS } from 'constants/requests';
import { USER_DATA } from 'constants/userData';
import { DisplayData } from 'types/repository/DisplayData';

export function getRepositoryImageUrl({
  imageId,
  attachmentsUrl,
}: DisplayData) {
  if (attachmentsUrl) return `${GITHUB_URLS.attachments}/${imageId}`;
  return `${GITHUB_URLS.images}/${USER_DATA.id}/${imageId}`;
}

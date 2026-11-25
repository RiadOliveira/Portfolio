import type { DisplayData } from '@/types/repository/displayData';

import { USER_DATA } from '@/constants/userData';
import { GITHUB_URLS } from '@/constants/requests';

export function getRepositoryImageUrl({
  imageId,
  attachmentsUrl,
}: DisplayData) {
  if (attachmentsUrl) return `${GITHUB_URLS.attachments}/${imageId}`;
  return `${GITHUB_URLS.images}/${USER_DATA.id}/${imageId}`;
}

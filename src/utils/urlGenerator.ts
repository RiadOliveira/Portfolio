import type { Technology } from '@/types/repository/technology';
import type { RepositoryShowcase } from '@/types/repository';

import { USER_DATA } from '@/constants/userData';
import { GITHUB_URLS } from '@/constants/githubURLs';
import { TECHNOLOGIES_DATA } from '@/constants/technologiesData';

export const URL_GENERATOR = {
  showcase(repositoryName: string) {
    return `${GITHUB_URLS.content}/${USER_DATA.login}/${repositoryName}/main/.portfolio/displayData.json`;
  },

  repositoryPage(repositoryName: string) {
    return `${GITHUB_URLS.default}/${USER_DATA.login}/${repositoryName}`;
  },

  repositoryImage({ imageId, attachmentsUrl }: RepositoryShowcase) {
    if (attachmentsUrl) return `${GITHUB_URLS.attachments}/${imageId}`;
    return `${GITHUB_URLS.images}/${USER_DATA.id}/${imageId}`;
  },

  technologyBadge(technology: Technology) {
    const {
      badgeComponents: { label, logo, logoColor },
    } = TECHNOLOGIES_DATA[technology];

    return `https://img.shields.io/badge/${label}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
  },
};

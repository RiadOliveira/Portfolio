export const DEFAULT_REVALIDATE_TIME = 3600 as const;

export const DEFAULT_NEXT_FETCH_CONFIG: NextFetchRequestConfig = {
  revalidate: DEFAULT_REVALIDATE_TIME,
} as const;

export const GITHUB_URLS = {
  default: 'https://github.com',
  api: 'https://api.github.com/users',
  content: 'https://raw.githubusercontent.com',
  avatar: 'https://avatars.githubusercontent.com/u',
  images: 'https://user-images.githubusercontent.com',
  attachments: 'https://github.com/user-attachments/assets',
} as const;

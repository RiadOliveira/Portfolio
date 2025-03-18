export const DEFAULT_REVALIDATE_TIME = 3600 as const;

export const DEFAULT_NEXT_FETCH_CONFIG: NextFetchRequestConfig = {
  revalidate: DEFAULT_REVALIDATE_TIME,
} as const;

export const GITHUB_URLS = {
  API: 'https://api.github.com/users',
  CONTENT: 'https://raw.githubusercontent.com',
} as const;

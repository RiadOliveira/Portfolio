const DEFAULT_NEXT_FETCH_CONFIG: NextFetchRequestConfig = {
  revalidate: 3600,
} as const;

const PARSER = {
  JSON: (response: Response) => response.json(),
  TEXT: (response: Response) => response.text(),
} as const;

type ResponseFormat = keyof typeof PARSER;

export function cachedJSONFetch<T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit,
  responseFormat: ResponseFormat = 'JSON',
) {
  const FETCH_PROPS: RequestInit = { next: DEFAULT_NEXT_FETCH_CONFIG, ...init };
  return fetch(input, FETCH_PROPS).then(PARSER[responseFormat]) as Promise<T>;
}

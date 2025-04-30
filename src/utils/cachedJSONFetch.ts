import { DEFAULT_NEXT_FETCH_CONFIG } from 'constants/requests';

const RESPONSE_PARSERS = {
  JSON: (response: Response) => response.json(),
  TEXT: (response: Response) => response.text(),
} as const;

type ResponseFormat = keyof typeof RESPONSE_PARSERS;

export function cachedJSONFetch<T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit,
  responseFormat: ResponseFormat = 'JSON',
) {
  const FETCH_PROPS: RequestInit = { next: DEFAULT_NEXT_FETCH_CONFIG, ...init };
  return fetch(input, FETCH_PROPS).then(
    RESPONSE_PARSERS[responseFormat],
  ) as Promise<T>;
}

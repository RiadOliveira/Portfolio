import { DEFAULT_NEXT_FETCH_CONFIG } from 'constants/requests';

export function cachedJSONFetch<T>(input: string | URL | globalThis.Request, init?: RequestInit) {
  const FETCH_PROPS: RequestInit = { next: DEFAULT_NEXT_FETCH_CONFIG, ...init };

  return fetch(input, FETCH_PROPS).then((res) => res.json()) as Promise<T>;
}

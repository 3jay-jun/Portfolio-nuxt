import type { FetchOptions } from "ofetch";

export const appFetch = <T>(url: string, options: FetchOptions<"json"> = {}) => {
  const config = useRuntimeConfig();
  const headers = {
    ...(options.headers as Record<string, string> | undefined),
  };

  return $fetch<T>(url, {
    baseURL: config.public.apiBaseUrl || "",
    ...options,
    headers,
  });
};

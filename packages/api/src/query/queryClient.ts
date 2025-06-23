// packages/api/src/queryClient.ts
import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

// 기본 설정 정의
const defaultQueryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5분
      refetchOnWindowFocus: false,
      retry: 0,
      networkMode: 'always',
    },
    mutations: {
      retry: 0,
      networkMode: 'always',
    },
  },
};

export const createQueryClient = (config?: QueryClientConfig) =>
  new QueryClient({
    ...defaultQueryClientConfig,
    ...config,
    defaultOptions: {
      queries: {
        ...defaultQueryClientConfig.defaultOptions?.queries,
        ...config?.defaultOptions?.queries,
      },
      mutations: {
        ...defaultQueryClientConfig.defaultOptions?.mutations,
        ...config?.defaultOptions?.mutations,
      },
    },
  });

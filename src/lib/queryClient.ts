// ============================================================
// REACT QUERY CONFIGURATION
// ============================================================

import { QueryClient } from '@tanstack/react-query';
import { env } from '@/config/env';

// Create query client with default options
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Refetch on window focus in production only
            refetchOnWindowFocus: env.APP_ENV === 'production',
            // Retry failed requests
            retry: (failureCount, error) => {
                // Don't retry on 4xx errors
                if (error && typeof error === 'object' && 'status' in error) {
                    const status = (error as { status: number }).status;
                    if (status >= 400 && status < 500) {
                        return false;
                    }
                }
                return failureCount < 3;
            },
            // Stale time - how long data is considered fresh
            staleTime: 1000 * 60 * 5, // 5 minutes
            // Cache time - how long unused data stays in cache
            gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
        },
        mutations: {
            // Retry mutations
            retry: 1,
        },
    },
});

export default queryClient;

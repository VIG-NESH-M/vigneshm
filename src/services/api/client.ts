// ============================================================
// AXIOS HTTP CLIENT - Configured API Client
// ============================================================

import axios, {
    AxiosError,
} from 'axios';
import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';
import { env } from '@/config/env';
import { STORAGE_KEYS, HTTP_STATUS } from '@/config/constants';
import { getStorageItem, removeStorageItem } from '@/utils/storage';
import type { ApiError } from '@/types';

// Create axios instance with default config
const apiClient: AxiosInstance = axios.create({
    baseURL: env.API_BASE_URL,
    timeout: env.API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Request interceptor - Add auth token to requests
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = getStorageItem<string>(STORAGE_KEYS.AUTH_TOKEN);

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Log requests in development
        if (env.APP_ENV === 'development') {
            console.log(`🚀 [API Request] ${config.method?.toUpperCase()} ${config.url}`, {
                params: config.params,
                data: config.data,
            });
        }

        return config;
    },
    (error: AxiosError) => {
        console.error('❌ [API Request Error]', error);
        return Promise.reject(error);
    }
);

// Response interceptor - Handle responses and errors
apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        // Log responses in development
        if (env.APP_ENV === 'development') {
            console.log(`✅ [API Response] ${response.config.url}`, {
                status: response.status,
                data: response.data,
            });
        }

        return response;
    },
    async (error: AxiosError<ApiError>) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        // Handle 401 Unauthorized - Token expired
        if (
            error.response?.status === HTTP_STATUS.UNAUTHORIZED &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            // Clear auth data and redirect to login
            removeStorageItem(STORAGE_KEYS.AUTH_TOKEN);
            removeStorageItem(STORAGE_KEYS.USER_DATA);

            // Redirect to login page
            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }

            return Promise.reject(error);
        }

        // Log errors in development
        if (env.APP_ENV === 'development') {
            console.error(`❌ [API Error] ${error.config?.url}`, {
                status: error.response?.status,
                message: error.response?.data?.message || error.message,
                data: error.response?.data,
            });
        }

        // Transform error to consistent format
        const apiError: ApiError = {
            message: error.response?.data?.message || error.message || 'An error occurred',
            code: error.code || 'UNKNOWN_ERROR',
            status: error.response?.status || 500,
            details: error.response?.data?.details,
        };

        return Promise.reject(apiError);
    }
);

// Helper methods for common HTTP operations
export const http = {
    get: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.get<T>(url, config),

    post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.post<T>(url, data, config),

    put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.put<T>(url, data, config),

    patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.patch<T>(url, data, config),

    delete: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> =>
        apiClient.delete<T>(url, config),
};

export default apiClient;

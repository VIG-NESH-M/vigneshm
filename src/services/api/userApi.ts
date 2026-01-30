// ============================================================
// USER API SERVICE
// ============================================================

import { http } from './client';
import { API_ENDPOINTS } from '@/config/constants';
import type { User, PaginatedResponse } from '@/types';

export interface GetUsersParams {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    order?: 'asc' | 'desc';
}

export interface CreateUserPayload {
    email: string;
    firstName: string;
    lastName: string;
    role?: string;
}

export interface UpdateUserPayload extends Partial<CreateUserPayload> {
    avatar?: string;
}

export const userApi = {
    /**
     * Get all users with pagination
     */
    getUsers: async (params: GetUsersParams = {}): Promise<PaginatedResponse<User>> => {
        const response = await http.get<User[]>(API_ENDPOINTS.USERS, {
            params: {
                _page: params.page ?? 1,
                _limit: params.limit ?? 10,
                q: params.search,
                _sort: params.sortBy,
                _order: params.order,
            },
        });

        // JSON Server returns total in headers
        const total = parseInt(response.headers['x-total-count'] ?? '0', 10);
        const limit = params.limit ?? 10;

        return {
            data: response.data,
            pagination: {
                page: params.page ?? 1,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
                hasNextPage: (params.page ?? 1) * limit < total,
                hasPrevPage: (params.page ?? 1) > 1,
            },
        };
    },

    /**
     * Get a single user by ID
     */
    getUserById: async (id: string): Promise<User> => {
        const response = await http.get<User>(API_ENDPOINTS.USER_BY_ID(id));
        return response.data;
    },

    /**
     * Create a new user
     */
    createUser: async (payload: CreateUserPayload): Promise<User> => {
        const response = await http.post<User>(API_ENDPOINTS.USERS, {
            ...payload,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
        return response.data;
    },

    /**
     * Update an existing user
     */
    updateUser: async (id: string, payload: UpdateUserPayload): Promise<User> => {
        const response = await http.patch<User>(API_ENDPOINTS.USER_BY_ID(id), {
            ...payload,
            updatedAt: new Date().toISOString(),
        });
        return response.data;
    },

    /**
     * Delete a user
     */
    deleteUser: async (id: string): Promise<void> => {
        await http.delete(API_ENDPOINTS.USER_BY_ID(id));
    },
};

export default userApi;

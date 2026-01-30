// ============================================================
// POST API SERVICE
// ============================================================

import { http } from './client';
import { API_ENDPOINTS } from '@/config/constants';
import type { PaginatedResponse } from '@/types';

export interface Post {
    id: string;
    title: string;
    body: string;
    userId: string;
    published: boolean;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

export interface GetPostsParams {
    page?: number;
    limit?: number;
    search?: string;
    userId?: string;
    published?: boolean;
    sortBy?: string;
    order?: 'asc' | 'desc';
}

export interface CreatePostPayload {
    title: string;
    body: string;
    userId: string;
    published?: boolean;
    tags?: string[];
}

export type UpdatePostPayload = Partial<CreatePostPayload>;

export const postApi = {
    /**
     * Get all posts with pagination
     */
    getPosts: async (params: GetPostsParams = {}): Promise<PaginatedResponse<Post>> => {
        const response = await http.get<Post[]>(API_ENDPOINTS.POSTS, {
            params: {
                _page: params.page ?? 1,
                _limit: params.limit ?? 10,
                q: params.search,
                userId: params.userId,
                published: params.published,
                _sort: params.sortBy,
                _order: params.order,
            },
        });

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
     * Get a single post by ID
     */
    getPostById: async (id: string): Promise<Post> => {
        const response = await http.get<Post>(API_ENDPOINTS.POST_BY_ID(id));
        return response.data;
    },

    /**
     * Create a new post
     */
    createPost: async (payload: CreatePostPayload): Promise<Post> => {
        const response = await http.post<Post>(API_ENDPOINTS.POSTS, {
            ...payload,
            published: payload.published ?? false,
            tags: payload.tags ?? [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
        return response.data;
    },

    /**
     * Update an existing post
     */
    updatePost: async (id: string, payload: UpdatePostPayload): Promise<Post> => {
        const response = await http.patch<Post>(API_ENDPOINTS.POST_BY_ID(id), {
            ...payload,
            updatedAt: new Date().toISOString(),
        });
        return response.data;
    },

    /**
     * Delete a post
     */
    deletePost: async (id: string): Promise<void> => {
        await http.delete(API_ENDPOINTS.POST_BY_ID(id));
    },

    /**
     * Toggle post publish status
     */
    togglePublish: async (id: string, published: boolean): Promise<Post> => {
        const response = await http.patch<Post>(API_ENDPOINTS.POST_BY_ID(id), {
            published,
            updatedAt: new Date().toISOString(),
        });
        return response.data;
    },
};

export default postApi;

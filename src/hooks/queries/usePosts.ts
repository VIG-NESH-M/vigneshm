// ============================================================
// USE POSTS QUERY HOOK
// ============================================================

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postApi, type GetPostsParams, type CreatePostPayload, type UpdatePostPayload } from '@/services/api';
import { QUERY_KEYS } from '@/types';

/**
 * Fetch posts with pagination
 */
export function usePosts(params: GetPostsParams = {}) {
    return useQuery({
        queryKey: [QUERY_KEYS.POSTS, params],
        queryFn: () => postApi.getPosts(params),
        placeholderData: (previousData) => previousData,
    });
}

/**
 * Fetch a single post by ID
 */
export function usePost(id: string | undefined) {
    return useQuery({
        queryKey: [QUERY_KEYS.POST, id],
        queryFn: () => postApi.getPostById(id!),
        enabled: !!id,
    });
}

/**
 * Create a new post
 */
export function useCreatePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: CreatePostPayload) => postApi.createPost(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
        },
    });
}

/**
 * Update an existing post
 */
export function useUpdatePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, payload }: { id: string; payload: UpdatePostPayload }) =>
            postApi.updatePost(id, payload),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POST, variables.id] });
        },
    });
}

/**
 * Delete a post
 */
export function useDeletePost() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => postApi.deletePost(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
        },
    });
}

/**
 * Toggle post publish status
 */
export function useTogglePostPublish() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, published }: { id: string; published: boolean }) =>
            postApi.togglePublish(id, published),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POSTS] });
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POST, variables.id] });
        },
    });
}

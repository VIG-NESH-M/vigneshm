// ============================================================
// USE USERS QUERY HOOK
// ============================================================

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userApi, type GetUsersParams, type CreateUserPayload, type UpdateUserPayload } from '@/services/api';
import { QUERY_KEYS } from '@/types';

/**
 * Fetch users with pagination
 */
export function useUsers(params: GetUsersParams = {}) {
    return useQuery({
        queryKey: [QUERY_KEYS.USERS, params],
        queryFn: () => userApi.getUsers(params),
        placeholderData: (previousData) => previousData,
    });
}

/**
 * Fetch a single user by ID
 */
export function useUser(id: string | undefined) {
    return useQuery({
        queryKey: [QUERY_KEYS.USER, id],
        queryFn: () => userApi.getUserById(id!),
        enabled: !!id,
    });
}

/**
 * Create a new user
 */
export function useCreateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: CreateUserPayload) => userApi.createUser(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });
        },
    });
}

/**
 * Update an existing user
 */
export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, payload }: { id: string; payload: UpdateUserPayload }) =>
            userApi.updateUser(id, payload),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER, variables.id] });
        },
    });
}

/**
 * Delete a user
 */
export function useDeleteUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => userApi.deleteUser(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USERS] });
        },
    });
}

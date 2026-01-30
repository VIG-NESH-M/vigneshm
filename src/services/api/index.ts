// ============================================================
// API SERVICES INDEX
// ============================================================

export { default as apiClient, http } from './client';
export { userApi } from './userApi';
export { postApi } from './postApi';
export type { GetUsersParams, CreateUserPayload, UpdateUserPayload } from './userApi';
export type { Post, GetPostsParams, CreatePostPayload, UpdatePostPayload } from './postApi';

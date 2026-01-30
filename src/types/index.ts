// ============================================================
// GLOBAL TYPE DEFINITIONS
// ============================================================

// API Response Types
export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
    timestamp: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    pagination: PaginationMeta;
}

export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

// Error Types
export interface ApiError {
    message: string;
    code: string;
    status: number;
    details?: Record<string, string[]>;
}

// User Types
export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
}

export type UserRole = 'admin' | 'user' | 'guest';

// Auth Types
export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    firstName: string;
    lastName: string;
    confirmPassword: string;
}

// UI Types
export interface UIState {
    theme: Theme;
    sidebarOpen: boolean;
    isLoading: boolean;
    notifications: Notification[];
}

export type Theme = 'light' | 'dark' | 'system';

export interface Notification {
    id: string;
    type: NotificationType;
    title: string;
    message: string;
    duration?: number;
    createdAt: string;
}

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

// Common Props Types
export interface BaseComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export interface WithLoadingProps {
    isLoading?: boolean;
    loadingText?: string;
}

export interface WithErrorProps {
    error?: string | null;
    onRetry?: () => void;
}

// Route Types
export interface RouteConfig {
    path: string;
    element: React.ReactNode;
    title: string;
    isProtected?: boolean;
    roles?: UserRole[];
    children?: RouteConfig[];
}

// Table Types
export interface TableColumn<T> {
    key: keyof T | string;
    header: string;
    sortable?: boolean;
    render?: (item: T) => React.ReactNode;
    width?: string;
}

export interface TableProps<T> {
    data: T[];
    columns: TableColumn<T>[];
    isLoading?: boolean;
    onRowClick?: (item: T) => void;
    emptyMessage?: string;
}

// Form Types
export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'checkbox';
    placeholder?: string;
    required?: boolean;
    options?: SelectOption[];
    validation?: ValidationRule[];
}

export interface SelectOption {
    value: string | number;
    label: string;
}

export interface ValidationRule {
    type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
    value?: string | number | RegExp;
    message: string;
    validator?: (value: unknown) => boolean;
}

// Query Keys
export const QUERY_KEYS = {
    USERS: 'users',
    USER: 'user',
    POSTS: 'posts',
    POST: 'post',
    COMMENTS: 'comments',
} as const;

export type QueryKey = (typeof QUERY_KEYS)[keyof typeof QUERY_KEYS];

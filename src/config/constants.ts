// ============================================================
// APPLICATION CONSTANTS
// ============================================================

// HTTP Status Codes
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
    AUTH_TOKEN: 'auth_token',
    REFRESH_TOKEN: 'refresh_token',
    USER_DATA: 'user_data',
    THEME: 'theme',
    LANGUAGE: 'language',
    SIDEBAR_STATE: 'sidebar_state',
} as const;

// Route Paths
export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    USERS: '/users',
    USER_DETAIL: '/users/:id',
    POSTS: '/posts',
    POST_DETAIL: '/posts/:id',
    NOT_FOUND: '*',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
    // Auth
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',

    // Users
    USERS: '/users',
    USER_BY_ID: (id: string) => `/users/${id}`,
    USER_PROFILE: '/users/profile',

    // Posts
    POSTS: '/posts',
    POST_BY_ID: (id: string) => `/posts/${id}`,

    // Comments
    COMMENTS: '/comments',
    COMMENT_BY_ID: (id: string) => `/comments/${id}`,
} as const;

// Pagination Defaults
export const PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
    PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
} as const;

// Date Formats
export const DATE_FORMATS = {
    DISPLAY: 'MMM dd, yyyy',
    DISPLAY_WITH_TIME: 'MMM dd, yyyy HH:mm',
    ISO: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
    INPUT: 'yyyy-MM-dd',
    TIME: 'HH:mm',
} as const;

// Notification Durations (in milliseconds)
export const NOTIFICATION_DURATION = {
    SHORT: 3000,
    MEDIUM: 5000,
    LONG: 8000,
    PERSISTENT: 0,
} as const;

// Validation Patterns
export const VALIDATION_PATTERNS = {
    EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    PHONE: /^\+?[1-9]\d{1,14}$/,
    URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
    SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
} as const;

// Validation Messages
export const VALIDATION_MESSAGES = {
    REQUIRED: 'This field is required',
    EMAIL: 'Please enter a valid email address',
    PASSWORD:
        'Password must be at least 8 characters with uppercase, lowercase, number, and special character',
    MIN_LENGTH: (min: number) => `Must be at least ${min} characters`,
    MAX_LENGTH: (max: number) => `Must be no more than ${max} characters`,
    PASSWORDS_MATCH: 'Passwords must match',
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION = {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
} as const;

// Z-Index Layers
export const Z_INDEX = {
    DROPDOWN: 1000,
    STICKY: 1020,
    FIXED: 1030,
    MODAL_BACKDROP: 1040,
    MODAL: 1050,
    POPOVER: 1060,
    TOOLTIP: 1070,
    TOAST: 1080,
} as const;

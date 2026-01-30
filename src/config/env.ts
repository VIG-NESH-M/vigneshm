// ============================================================
// ENVIRONMENT CONFIGURATION
// ============================================================

interface EnvConfig {
    // API Configuration
    API_BASE_URL: string;
    API_TIMEOUT: number;

    // App Configuration
    APP_NAME: string;
    APP_VERSION: string;
    APP_ENV: 'development' | 'staging' | 'production';

    // Feature Flags
    ENABLE_MOCK_API: boolean;
    ENABLE_REDUX_DEVTOOLS: boolean;
    ENABLE_QUERY_DEVTOOLS: boolean;

    // External Services
    SENTRY_DSN?: string;
    ANALYTICS_ID?: string;
}

const getEnvVar = (key: string, defaultValue?: string): string => {
    const value = import.meta.env[key] ?? defaultValue;
    if (value === undefined) {
        throw new Error(`Missing environment variable: ${key}`);
    }
    return value;
};

const getEnvVarAsBoolean = (key: string, defaultValue: boolean): boolean => {
    const value = import.meta.env[key];
    if (value === undefined) return defaultValue;
    return value === 'true' || value === '1';
};

const getEnvVarAsNumber = (key: string, defaultValue: number): number => {
    const value = import.meta.env[key];
    if (value === undefined) return defaultValue;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? defaultValue : parsed;
};

export const env: EnvConfig = {
    // API Configuration
    API_BASE_URL: getEnvVar('VITE_API_BASE_URL', 'http://localhost:3001'),
    API_TIMEOUT: getEnvVarAsNumber('VITE_API_TIMEOUT', 30000),

    // App Configuration
    APP_NAME: getEnvVar('VITE_APP_NAME', 'React Starter'),
    APP_VERSION: getEnvVar('VITE_APP_VERSION', '1.0.0'),
    APP_ENV: getEnvVar('VITE_APP_ENV', 'development') as EnvConfig['APP_ENV'],

    // Feature Flags
    ENABLE_MOCK_API: getEnvVarAsBoolean('VITE_ENABLE_MOCK_API', false),
    ENABLE_REDUX_DEVTOOLS: getEnvVarAsBoolean('VITE_ENABLE_REDUX_DEVTOOLS', true),
    ENABLE_QUERY_DEVTOOLS: getEnvVarAsBoolean('VITE_ENABLE_QUERY_DEVTOOLS', true),

    // External Services
    SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
    ANALYTICS_ID: import.meta.env.VITE_ANALYTICS_ID,
};

// Freeze the config to prevent modifications
Object.freeze(env);

export default env;

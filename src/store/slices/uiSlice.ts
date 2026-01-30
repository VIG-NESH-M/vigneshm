// ============================================================
// UI SLICE - Redux UI State Management
// ============================================================

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UIState, Theme, Notification, NotificationType } from '@/types';
import { STORAGE_KEYS, NOTIFICATION_DURATION } from '@/config/constants';
import { getStorageItem, setStorageItem } from '@/utils/storage';
import { generateId } from '@/utils/helpers';

// Get initial theme from storage or system preference
const getInitialTheme = (): Theme => {
    const stored = getStorageItem<Theme>(STORAGE_KEYS.THEME);
    if (stored) return stored;

    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }

    return 'light';
};

// Initial state
const initialState: UIState = {
    theme: getInitialTheme(),
    sidebarOpen: getStorageItem<boolean>(STORAGE_KEYS.SIDEBAR_STATE) ?? true,
    isLoading: false,
    notifications: [],
};

// UI slice
const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        // Theme actions
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
            setStorageItem(STORAGE_KEYS.THEME, action.payload);

            // Apply theme to document
            if (typeof document !== 'undefined') {
                const root = document.documentElement;
                root.classList.remove('light', 'dark');

                if (action.payload === 'system') {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
                        .matches
                        ? 'dark'
                        : 'light';
                    root.classList.add(systemTheme);
                } else {
                    root.classList.add(action.payload);
                }
            }
        },

        toggleTheme: (state) => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            state.theme = newTheme;
            setStorageItem(STORAGE_KEYS.THEME, newTheme);

            if (typeof document !== 'undefined') {
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(newTheme);
            }
        },

        // Sidebar actions
        setSidebarOpen: (state, action: PayloadAction<boolean>) => {
            state.sidebarOpen = action.payload;
            setStorageItem(STORAGE_KEYS.SIDEBAR_STATE, action.payload);
        },

        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
            setStorageItem(STORAGE_KEYS.SIDEBAR_STATE, state.sidebarOpen);
        },

        // Loading actions
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

        // Notification actions
        addNotification: (
            state,
            action: PayloadAction<{
                type: NotificationType;
                title: string;
                message: string;
                duration?: number;
            }>
        ) => {
            const notification: Notification = {
                id: generateId(),
                type: action.payload.type,
                title: action.payload.title,
                message: action.payload.message,
                duration: action.payload.duration ?? NOTIFICATION_DURATION.MEDIUM,
                createdAt: new Date().toISOString(),
            };
            state.notifications.push(notification);
        },

        removeNotification: (state, action: PayloadAction<string>) => {
            state.notifications = state.notifications.filter(
                (n) => n.id !== action.payload
            );
        },

        clearAllNotifications: (state) => {
            state.notifications = [];
        },
    },
});

// Export actions
export const {
    setTheme,
    toggleTheme,
    setSidebarOpen,
    toggleSidebar,
    setLoading,
    addNotification,
    removeNotification,
    clearAllNotifications,
} = uiSlice.actions;

// Notification helper actions
export const showSuccess = (title: string, message: string) =>
    addNotification({ type: 'success', title, message });

export const showError = (title: string, message: string) =>
    addNotification({ type: 'error', title, message });

export const showWarning = (title: string, message: string) =>
    addNotification({ type: 'warning', title, message });

export const showInfo = (title: string, message: string) =>
    addNotification({ type: 'info', title, message });

export default uiSlice.reducer;

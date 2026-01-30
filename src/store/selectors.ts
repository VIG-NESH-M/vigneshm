// ============================================================
// REDUX SELECTORS
// ============================================================

import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';

// ==================== AUTH SELECTORS ====================

const selectAuthState = (state: RootState) => state.auth;

export const selectUser = createSelector(
    selectAuthState,
    (auth) => auth.user
);

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (auth) => auth.isAuthenticated
);

export const selectAuthToken = createSelector(
    selectAuthState,
    (auth) => auth.token
);

export const selectAuthLoading = createSelector(
    selectAuthState,
    (auth) => auth.isLoading
);

export const selectAuthError = createSelector(
    selectAuthState,
    (auth) => auth.error
);

export const selectUserRole = createSelector(
    selectUser,
    (user) => user?.role ?? 'guest'
);

export const selectUserFullName = createSelector(
    selectUser,
    (user) => (user ? `${user.firstName} ${user.lastName}` : '')
);

// ==================== UI SELECTORS ====================

const selectUIState = (state: RootState) => state.ui;

export const selectTheme = createSelector(
    selectUIState,
    (ui) => ui.theme
);

export const selectSidebarOpen = createSelector(
    selectUIState,
    (ui) => ui.sidebarOpen
);

export const selectIsLoading = createSelector(
    selectUIState,
    (ui) => ui.isLoading
);

export const selectNotifications = createSelector(
    selectUIState,
    (ui) => ui.notifications
);

export const selectNotificationCount = createSelector(
    selectNotifications,
    (notifications) => notifications.length
);

export const selectHasNotifications = createSelector(
    selectNotificationCount,
    (count) => count > 0
);

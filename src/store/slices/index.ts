// ============================================================
// SLICES INDEX
// ============================================================

export { default as authReducer } from './authSlice';
export { default as uiReducer } from './uiSlice';

// Auth exports
export {
    login,
    logout,
    setUser,
    clearError,
    updateUser,
} from './authSlice';

// UI exports
export {
    setTheme,
    toggleTheme,
    setSidebarOpen,
    toggleSidebar,
    setLoading,
    addNotification,
    removeNotification,
    clearAllNotifications,
    showSuccess,
    showError,
    showWarning,
    showInfo,
} from './uiSlice';

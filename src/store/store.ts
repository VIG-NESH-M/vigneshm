// ============================================================
// REDUX STORE CONFIGURATION
// ============================================================

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer, uiReducer } from './slices';
import { env } from '@/config/env';

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
});

// Configure store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
    devTools: env.ENABLE_REDUX_DEVTOOLS && env.APP_ENV !== 'production',
});

// Infer types from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

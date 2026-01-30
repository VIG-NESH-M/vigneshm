// ============================================================
// AUTH SLICE - Redux Authentication State
// ============================================================

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, User, LoginCredentials } from '@/types';
import { STORAGE_KEYS } from '@/config/constants';
import { getStorageItem, setStorageItem, removeStorageItem } from '@/utils/storage';

// Initial state
const initialState: AuthState = {
    user: getStorageItem<User>(STORAGE_KEYS.USER_DATA),
    token: getStorageItem<string>(STORAGE_KEYS.AUTH_TOKEN),
    isAuthenticated: !!getStorageItem<string>(STORAGE_KEYS.AUTH_TOKEN),
    isLoading: false,
    error: null,
};

// Async thunks
export const login = createAsyncThunk<
    { user: User; token: string },
    LoginCredentials,
    { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        // Simulate API call - Replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock response - Replace with actual API response
        const mockUser: User = {
            id: '1',
            email: credentials.email,
            firstName: 'John',
            lastName: 'Doe',
            role: 'user',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        const mockToken = 'mock-jwt-token-' + Date.now();

        // Store in local storage
        setStorageItem(STORAGE_KEYS.AUTH_TOKEN, mockToken);
        setStorageItem(STORAGE_KEYS.USER_DATA, mockUser);

        return { user: mockUser, token: mockToken };
    } catch (error) {
        return rejectWithValue(
            error instanceof Error ? error.message : 'Login failed'
        );
    }
});

export const logout = createAsyncThunk<void, void>('auth/logout', async () => {
    // Clear storage
    removeStorageItem(STORAGE_KEYS.AUTH_TOKEN);
    removeStorageItem(STORAGE_KEYS.USER_DATA);
});

// Auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            setStorageItem(STORAGE_KEYS.USER_DATA, action.payload);
        },
        clearError: (state) => {
            state.error = null;
        },
        updateUser: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
                setStorageItem(STORAGE_KEYS.USER_DATA, state.user);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload ?? 'Login failed';
            })
            // Logout
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
                state.isLoading = false;
                state.error = null;
            });
    },
});

export const { setUser, clearError, updateUser } = authSlice.actions;
export default authSlice.reducer;

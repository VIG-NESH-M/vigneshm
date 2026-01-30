// ============================================================
// STORAGE UTILITY - Local/Session Storage Operations
// ============================================================

type StorageType = 'local' | 'session';

interface StorageOptions {
    type?: StorageType;
    expiry?: number; // Time in milliseconds
}

interface StoredItem<T> {
    value: T;
    expiry?: number;
    createdAt: number;
}

const getStorage = (type: StorageType): Storage => {
    return type === 'local' ? localStorage : sessionStorage;
};

/**
 * Set an item in storage with optional expiry
 */
export const setStorageItem = <T>(
    key: string,
    value: T,
    options: StorageOptions = {}
): void => {
    try {
        const storage = getStorage(options.type ?? 'local');
        const item: StoredItem<T> = {
            value,
            createdAt: Date.now(),
            ...(options.expiry && { expiry: Date.now() + options.expiry }),
        };
        storage.setItem(key, JSON.stringify(item));
    } catch (error) {
        console.error(`Error setting storage item "${key}":`, error);
    }
};

/**
 * Get an item from storage, returns null if expired or not found
 */
export const getStorageItem = <T>(
    key: string,
    options: StorageOptions = {}
): T | null => {
    try {
        const storage = getStorage(options.type ?? 'local');
        const itemStr = storage.getItem(key);

        if (!itemStr) return null;

        // Try to parse as our StoredItem format
        try {
            const item: StoredItem<T> = JSON.parse(itemStr);

            // Check if it's our wrapped format (has 'value' property)
            if (item && typeof item === 'object' && 'value' in item) {
                // Check if item has expired
                if (item.expiry && Date.now() > item.expiry) {
                    storage.removeItem(key);
                    return null;
                }
                return item.value;
            }

            // If parsed successfully but not our format, return as-is
            return item as T;
        } catch {
            // If JSON parse fails, it might be a plain string value
            // Return the raw string as T (for backwards compatibility)
            return itemStr as T;
        }
    } catch (error) {
        console.error(`Error getting storage item "${key}":`, error);
        return null;
    }
};

/**
 * Remove an item from storage
 */
export const removeStorageItem = (
    key: string,
    options: StorageOptions = {}
): void => {
    try {
        const storage = getStorage(options.type ?? 'local');
        storage.removeItem(key);
    } catch (error) {
        console.error(`Error removing storage item "${key}":`, error);
    }
};

/**
 * Clear all items from storage
 */
export const clearStorage = (options: StorageOptions = {}): void => {
    try {
        const storage = getStorage(options.type ?? 'local');
        storage.clear();
    } catch (error) {
        console.error('Error clearing storage:', error);
    }
};

/**
 * Check if storage is available
 */
export const isStorageAvailable = (type: StorageType = 'local'): boolean => {
    try {
        const storage = getStorage(type);
        const testKey = '__storage_test__';
        storage.setItem(testKey, testKey);
        storage.removeItem(testKey);
        return true;
    } catch {
        return false;
    }
};

/**
 * Get all keys from storage
 */
export const getStorageKeys = (options: StorageOptions = {}): string[] => {
    try {
        const storage = getStorage(options.type ?? 'local');
        return Object.keys(storage);
    } catch (error) {
        console.error('Error getting storage keys:', error);
        return [];
    }
};

/**
 * Get storage size in bytes
 */
export const getStorageSize = (options: StorageOptions = {}): number => {
    try {
        const storage = getStorage(options.type ?? 'local');
        let totalSize = 0;
        for (const key of Object.keys(storage)) {
            const value = storage.getItem(key);
            if (value) {
                totalSize += key.length + value.length;
            }
        }
        return totalSize * 2; // UTF-16 uses 2 bytes per character
    } catch (error) {
        console.error('Error calculating storage size:', error);
        return 0;
    }
};

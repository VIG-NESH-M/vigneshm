// ============================================================
// USE LOCAL STORAGE HOOK
// ============================================================

import { useState, useEffect, useCallback } from 'react';

type SetValue<T> = T | ((prevValue: T) => T);

/**
 * Sync state with localStorage
 * Automatically handles serialization/deserialization
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: SetValue<T>) => void, () => void] {
    // Get stored value or use initial value
    const readValue = useCallback((): T => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState<T>(readValue);

    // Return a wrapped version of useState's setter function
    const setValue = useCallback(
        (value: SetValue<T>) => {
            try {
                // Allow value to be a function
                const valueToStore =
                    value instanceof Function ? value(storedValue) : value;

                // Save state
                setStoredValue(valueToStore);

                // Save to local storage
                if (typeof window !== 'undefined') {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }
            } catch (error) {
                console.warn(`Error setting localStorage key "${key}":`, error);
            }
        },
        [key, storedValue]
    );

    // Remove from storage
    const removeValue = useCallback(() => {
        try {
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key);
                setStoredValue(initialValue);
            }
        } catch (error) {
            console.warn(`Error removing localStorage key "${key}":`, error);
        }
    }, [initialValue, key]);

    // Handle storage events from other tabs
    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === key && event.newValue !== null) {
                try {
                    setStoredValue(JSON.parse(event.newValue) as T);
                } catch {
                    setStoredValue(event.newValue as T);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [key]);

    return [storedValue, setValue, removeValue];
}

export default useLocalStorage;

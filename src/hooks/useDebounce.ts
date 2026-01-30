// ============================================================
// USE DEBOUNCE HOOK
// ============================================================

import { useState, useEffect } from 'react';

/**
 * Debounce a value
 * Useful for search inputs to delay API calls
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;

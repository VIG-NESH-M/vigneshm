// ============================================================
// GENERAL HELPERS
// ============================================================

/**
 * Generate a unique ID
 */
export const generateId = (): string => {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
};

/**
 * Generate a UUID v4
 */
export const generateUUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

/**
 * Debounce a function
 */
export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, wait);
    };
};

/**
 * Throttle a function
 */
export const throttle = <T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle = false;

    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
};

/**
 * Sleep/delay for a specified time
 */
export const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime()) as T;
    }

    if (obj instanceof Array) {
        return obj.map((item) => deepClone(item)) as T;
    }

    if (obj instanceof Object) {
        const cloned = {} as T;
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }

    return obj;
};

/**
 * Deep merge objects
 */
export const deepMerge = <T extends Record<string, unknown>>(
    target: T,
    ...sources: Partial<T>[]
): T => {
    if (!sources.length) return target;

    const source = sources.shift();

    if (source === undefined) return target;

    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            const sourceValue = source[key];
            const targetValue = target[key];

            if (
                sourceValue &&
                typeof sourceValue === 'object' &&
                !Array.isArray(sourceValue) &&
                targetValue &&
                typeof targetValue === 'object' &&
                !Array.isArray(targetValue)
            ) {
                target[key] = deepMerge(
                    targetValue as Record<string, unknown>,
                    sourceValue as Record<string, unknown>
                ) as T[Extract<keyof T, string>];
            } else {
                target[key] = sourceValue as T[Extract<keyof T, string>];
            }
        }
    }

    return deepMerge(target, ...sources);
};

/**
 * Check if two objects are deeply equal
 */
export const deepEqual = <T>(a: T, b: T): boolean => {
    if (a === b) return true;

    if (
        typeof a !== 'object' ||
        typeof b !== 'object' ||
        a === null ||
        b === null
    ) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])) {
            return false;
        }
    }

    return true;
};

/**
 * Pick specific keys from an object
 */
export const pick = <T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    keys: K[]
): Pick<T, K> => {
    const result = {} as Pick<T, K>;
    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
};

/**
 * Omit specific keys from an object
 */
export const omit = <T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    keys: K[]
): Omit<T, K> => {
    const result = { ...obj };
    for (const key of keys) {
        delete result[key];
    }
    return result;
};

/**
 * Check if value is empty (null, undefined, empty string, empty array, empty object)
 */
export const isEmpty = (value: unknown): boolean => {
    if (value === null || value === undefined) return true;
    if (typeof value === 'string') return value.trim() === '';
    if (Array.isArray(value)) return value.length === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return false;
};

/**
 * Group an array by a key
 */
export const groupBy = <T>(
    array: T[],
    key: keyof T
): Record<string, T[]> => {
    return array.reduce(
        (result, item) => {
            const groupKey = String(item[key]);
            if (!result[groupKey]) {
                result[groupKey] = [];
            }
            result[groupKey].push(item);
            return result;
        },
        {} as Record<string, T[]>
    );
};

/**
 * Sort an array of objects by a key
 */
export const sortBy = <T>(
    array: T[],
    key: keyof T,
    order: 'asc' | 'desc' = 'asc'
): T[] => {
    return [...array].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];

        if (aVal < bVal) return order === 'asc' ? -1 : 1;
        if (aVal > bVal) return order === 'asc' ? 1 : -1;
        return 0;
    });
};

/**
 * Remove duplicates from an array
 */
export const unique = <T>(array: T[], key?: keyof T): T[] => {
    if (!key) {
        return [...new Set(array)];
    }

    const seen = new Set();
    return array.filter((item) => {
        const value = item[key];
        if (seen.has(value)) {
            return false;
        }
        seen.add(value);
        return true;
    });
};

/**
 * Chunk an array into smaller arrays
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

/**
 * Flatten a nested array
 */
export const flatten = <T>(array: (T | T[])[]): T[] => {
    return array.reduce<T[]>((result, item) => {
        if (Array.isArray(item)) {
            return result.concat(flatten(item));
        }
        return result.concat(item);
    }, []);
};

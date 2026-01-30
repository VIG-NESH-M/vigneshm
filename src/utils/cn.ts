// ============================================================
// CLASSNAME UTILITY - Conditional class name joining
// ============================================================

type ClassValue =
    | string
    | number
    | boolean
    | undefined
    | null
    | ClassValue[]
    | { [key: string]: boolean | undefined | null };

/**
 * Conditionally join class names together
 * Inspired by clsx/classnames libraries
 */
export const cn = (...inputs: ClassValue[]): string => {
    const classes: string[] = [];

    for (const input of inputs) {
        if (!input) continue;

        if (typeof input === 'string' || typeof input === 'number') {
            classes.push(String(input));
        } else if (Array.isArray(input)) {
            const nested = cn(...input);
            if (nested) classes.push(nested);
        } else if (typeof input === 'object') {
            for (const [key, value] of Object.entries(input)) {
                if (value) classes.push(key);
            }
        }
    }

    return classes.join(' ');
};

export default cn;

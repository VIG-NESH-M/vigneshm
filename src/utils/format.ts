// ============================================================
// FORMAT HELPERS - Date, Number, String Formatting
// ============================================================

/**
 * Format a date to a human-readable string
 */
export const formatDate = (
    date: Date | string | number,
    options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }
): string => {
    try {
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime())) return 'Invalid Date';
        return new Intl.DateTimeFormat('en-US', options).format(dateObj);
    } catch {
        return 'Invalid Date';
    }
};

/**
 * Format a date to relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date: Date | string | number): string => {
    try {
        const dateObj = new Date(date);
        if (isNaN(dateObj.getTime())) return 'Invalid Date';

        const now = new Date();
        const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

        const intervals: { label: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'week', seconds: 604800 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 },
        ];

        const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

        for (const interval of intervals) {
            const count = Math.floor(diffInSeconds / interval.seconds);
            if (count >= 1) {
                return rtf.format(-count, interval.label);
            }
        }

        return 'just now';
    } catch {
        return 'Invalid Date';
    }
};

/**
 * Format a number with locale-specific formatting
 */
export const formatNumber = (
    value: number,
    options: Intl.NumberFormatOptions = {}
): string => {
    return new Intl.NumberFormat('en-US', options).format(value);
};

/**
 * Format a number as currency
 */
export const formatCurrency = (
    value: number,
    currency: string = 'USD',
    locale: string = 'en-US'
): string => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(value);
};

/**
 * Format a number as percentage
 */
export const formatPercentage = (
    value: number,
    decimals: number = 1
): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value / 100);
};

/**
 * Format bytes to human-readable size
 */
export const formatBytes = (bytes: number, decimals: number = 2): string => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
};

/**
 * Truncate a string to a specified length
 */
export const truncate = (
    str: string,
    length: number,
    suffix: string = '...'
): string => {
    if (str.length <= length) return str;
    return str.slice(0, length - suffix.length) + suffix;
};

/**
 * Capitalize the first letter of a string
 */
export const capitalize = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Convert string to title case
 */
export const toTitleCase = (str: string): string => {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => capitalize(word))
        .join(' ');
};

/**
 * Convert string to slug
 */
export const toSlug = (str: string): string => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

/**
 * Mask sensitive data (e.g., email, phone)
 */
export const maskEmail = (email: string): string => {
    const [name, domain] = email.split('@');
    if (!name || !domain) return email;
    const maskedName = name.charAt(0) + '*'.repeat(Math.min(name.length - 2, 5)) + name.charAt(name.length - 1);
    return `${maskedName}@${domain}`;
};

export const maskPhone = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length < 4) return phone;
    return '*'.repeat(cleaned.length - 4) + cleaned.slice(-4);
};

/**
 * Generate initials from a name
 */
export const getInitials = (name: string, maxLength: number = 2): string => {
    return name
        .split(' ')
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, maxLength);
};

/**
 * Pluralize a word based on count
 */
export const pluralize = (
    count: number,
    singular: string,
    plural?: string
): string => {
    const pluralForm = plural ?? `${singular}s`;
    return count === 1 ? singular : pluralForm;
};

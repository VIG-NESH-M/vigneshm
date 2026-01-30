// ============================================================
// USE DOCUMENT TITLE HOOK
// ============================================================

import { useEffect, useRef } from 'react';
import { env } from '@/config/env';

/**
 * Update document title
 * Restores previous title on unmount
 */
export function useDocumentTitle(
    title: string,
    options: {
        restoreOnUnmount?: boolean;
        suffix?: string;
    } = {}
): void {
    const { restoreOnUnmount = true, suffix = env.APP_NAME } = options;
    const previousTitle = useRef<string>(document.title);

    useEffect(() => {
        const fullTitle = suffix ? `${title} | ${suffix}` : title;
        document.title = fullTitle;
    }, [title, suffix]);

    useEffect(() => {
        const savedTitle = previousTitle.current;
        return () => {
            if (restoreOnUnmount) {
                document.title = savedTitle;
            }
        };
    }, [restoreOnUnmount]);
}

export default useDocumentTitle;

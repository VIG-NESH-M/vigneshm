// ============================================================
// USE MEDIA QUERY HOOK
// ============================================================

import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '@/config/constants';

/**
 * Listen to media query changes
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia(query);
        const handler = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Listen for changes
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
}

// Preset breakpoint hooks
export const useIsMobile = () => useMediaQuery(`(max-width: ${BREAKPOINTS.SM - 1}px)`);
export const useIsTablet = () => useMediaQuery(`(min-width: ${BREAKPOINTS.SM}px) and (max-width: ${BREAKPOINTS.LG - 1}px)`);
export const useIsDesktop = () => useMediaQuery(`(min-width: ${BREAKPOINTS.LG}px)`);
export const useIsDarkMode = () => useMediaQuery('(prefers-color-scheme: dark)');
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

export default useMediaQuery;

// ============================================================
// USE CLICK OUTSIDE HOOK
// ============================================================

import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

/**
 * Detect clicks outside of a component
 * Useful for dropdowns, modals, etc.
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
    handler: () => void,
    enabled: boolean = true
): RefObject<T | null> {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node;
            if (ref.current && !ref.current.contains(target)) {
                handler();
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [handler, enabled]);

    return ref;
}

export default useClickOutside;

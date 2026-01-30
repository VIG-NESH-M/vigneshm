// ============================================================
// USE TOGGLE HOOK
// ============================================================

import { useState, useCallback } from 'react';

/**
 * Simple boolean toggle hook
 */
export function useToggle(
    initialValue: boolean = false
): [boolean, () => void, (value: boolean) => void] {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    const setValueDirectly = useCallback((newValue: boolean) => {
        setValue(newValue);
    }, []);

    return [value, toggle, setValueDirectly];
}

export default useToggle;

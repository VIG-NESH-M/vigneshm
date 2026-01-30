// ============================================================
// HOOKS INDEX
// ============================================================

// Custom hooks
export { useDebounce } from './useDebounce';
export { useLocalStorage } from './useLocalStorage';
export { useMediaQuery, useIsMobile, useIsTablet, useIsDesktop, useIsDarkMode, usePrefersReducedMotion } from './useMediaQuery';
export { useClickOutside } from './useClickOutside';
export { useDocumentTitle } from './useDocumentTitle';
export { useToggle } from './useToggle';

// Query hooks
export * from './queries';

// Re-export store hooks
export { useAppDispatch, useAppSelector } from '@/store/hooks';

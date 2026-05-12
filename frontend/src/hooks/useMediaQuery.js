/**
 * useMediaQuery hook for responsive design and feature detection.
 * 
 * Provides a way to track CSS media query matches with proper
 * browser compatibility and SSR support. Includes preset breakpoints.
 * 
 * @module useMediaQuery
 */
import { useState, useEffect } from 'react'

/** Media query string for mobile screen widths (max 640px). */
const MEDIA_QUERY_MOBILE = '(max-width: 640px)';
/** Media query string for tablet screen widths (641px to 1024px). */
const MEDIA_QUERY_TABLET = '(min-width: 641px) and (max-width: 1024px)';
/** Media query string for desktop screen widths (1025px and above). */
const MEDIA_QUERY_DESKTOP = '(min-width: 1025px)';
/** Media query string for large desktop screen widths (1440px and above). */
const MEDIA_QUERY_LARGE_DESKTOP = '(min-width: 1440px)';
/** Media query string to detect the user's preference for dark color scheme. */
const MEDIA_QUERY_DARK_MODE = '(prefers-color-scheme: dark)';
/** Media query string to detect the user's preference for reduced motion. */
const MEDIA_QUERY_REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
/** Media query string to detect high-contrast mode activation. */
const MEDIA_QUERY_HIGH_CONTRAST = '(forced-colors: active)';

/**
 * Subscribes to a media query and returns its current match state.
 */
export function useMediaQuery(query) {
  const normalizedQuery = typeof query === 'string' ? query.trim() : ''
  const hasValidQuery = normalizedQuery.length > 0

  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function' && hasValidQuery) {
      return window.matchMedia(normalizedQuery).matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function' || !hasValidQuery) return

    const mediaQuery = window.matchMedia(normalizedQuery)
    
    const handler = (event) => {
      setMatches(event.matches)
    }

    // Set initial value
    setMatches(mediaQuery.matches)

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handler)
      return () => {
        mediaQuery.removeEventListener('change', handler)
      }
    }

    if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handler)
      return () => mediaQuery.removeListener(handler)
    }
  }, [normalizedQuery, hasValidQuery])

  return matches
}

// Preset breakpoints
export function useIsMobile() {
  return useMediaQuery(MEDIA_QUERY_MOBILE)
}

export function useIsTablet() {
  return useMediaQuery(MEDIA_QUERY_TABLET)
}

export function useIsDesktop() {
  return useMediaQuery(MEDIA_QUERY_DESKTOP)
}

export function usePrefersDarkMode() {
  return useMediaQuery(MEDIA_QUERY_DARK_MODE)
}

export function usePrefersReducedMotion() {
  return useMediaQuery(MEDIA_QUERY_REDUCED_MOTION)
}

export function useIsLargeDesktop() {
  return useMediaQuery(MEDIA_QUERY_LARGE_DESKTOP)
}

export function useHighContrast() {
  return useMediaQuery(MEDIA_QUERY_HIGH_CONTRAST)
}

/** Media query string for landscape orientation. */
const MEDIA_QUERY_LANDSCAPE = '(orientation: landscape)';
/** Media query string for portrait orientation. */
const MEDIA_QUERY_PORTRAIT = '(orientation: portrait)';

export function useIsLandscape() {
  return useMediaQuery(MEDIA_QUERY_LANDSCAPE);
}

export function useIsPortrait() {
  return useMediaQuery(MEDIA_QUERY_PORTRAIT);
}

/**
 * Default export for useMediaQuery hook and presets.
 */
export default {
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useIsLargeDesktop,
  useHighContrast,
  useIsLandscape,
  useIsPortrait,
  usePrefersDarkMode,
  usePrefersReducedMotion
}

import { useState, useEffect } from 'react'

export function useMediaQuery(query) {
  const hasValidQuery = typeof query === 'string' && query.length > 0

  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined' && hasValidQuery) {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !hasValidQuery) return

    const mediaQuery = window.matchMedia(query)
    
    const handler = (event) => {
      setMatches(event.matches)
    }

    // Set initial value
    setMatches(mediaQuery.matches)

    // Add listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler)
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handler)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler)
      } else {
        mediaQuery.removeListener(handler)
      }
    }
  }, [query, hasValidQuery])

  return matches
}

// Preset breakpoints
export function useIsMobile() {
  return useMediaQuery('(max-width: 640px)')
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 1025px)')
}

export function usePrefersDarkMode() {
  return useMediaQuery('(prefers-color-scheme: dark)')
}

export function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

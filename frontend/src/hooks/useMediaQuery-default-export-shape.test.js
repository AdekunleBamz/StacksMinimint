import { describe, expect, it } from 'vitest'
import mediaHooks, {
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
} from './useMediaQuery'

describe('useMediaQuery module exports', () => {
  it('exposes all media hooks on default export object', () => {
    expect(mediaHooks.useMediaQuery).toBe(useMediaQuery)
    expect(mediaHooks.useIsMobile).toBe(useIsMobile)
    expect(mediaHooks.useIsTablet).toBe(useIsTablet)
    expect(mediaHooks.useIsDesktop).toBe(useIsDesktop)
    expect(mediaHooks.useIsLargeDesktop).toBe(useIsLargeDesktop)
    expect(mediaHooks.useHighContrast).toBe(useHighContrast)
    expect(mediaHooks.useIsLandscape).toBe(useIsLandscape)
    expect(mediaHooks.useIsPortrait).toBe(useIsPortrait)
    expect(mediaHooks.usePrefersDarkMode).toBe(usePrefersDarkMode)
    expect(mediaHooks.usePrefersReducedMotion).toBe(usePrefersReducedMotion)
  })
})

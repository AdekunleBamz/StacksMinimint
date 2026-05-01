import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { usePrefersReducedMotion } from './hooks/useMediaQuery';

describe('useMediaQuery default export reduced motion alias', () => {
  it('exposes usePrefersReducedMotion on the default export object', () => {
    expect(mediaQueryHooks.usePrefersReducedMotion).toBe(usePrefersReducedMotion);
  });
});

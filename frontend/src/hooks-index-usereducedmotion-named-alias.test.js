import { describe, expect, it } from 'vitest';

import { usePrefersReducedMotion } from './hooks';
import { usePrefersReducedMotion as usePrefersReducedMotionFromModule } from './hooks/useMediaQuery';

describe('hooks index usePrefersReducedMotion named alias', () => {
  it('re-exports usePrefersReducedMotion from the media query hook module', () => {
    expect(usePrefersReducedMotion).toBe(usePrefersReducedMotionFromModule);
  });
});

import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { useIsMobile } from './hooks/useMediaQuery';

describe('useMediaQuery default export mobile alias', () => {
  it('exposes useIsMobile on the default export object', () => {
    expect(mediaQueryHooks.useIsMobile).toBe(useIsMobile);
  });
});

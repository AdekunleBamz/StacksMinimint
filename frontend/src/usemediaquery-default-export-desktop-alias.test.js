import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { useIsDesktop } from './hooks/useMediaQuery';

describe('useMediaQuery default export desktop alias', () => {
  it('exposes useIsDesktop on the default export object', () => {
    expect(mediaQueryHooks.useIsDesktop).toBe(useIsDesktop);
  });
});

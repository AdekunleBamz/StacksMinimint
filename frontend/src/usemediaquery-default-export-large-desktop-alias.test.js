import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { useIsLargeDesktop } from './hooks/useMediaQuery';

describe('useMediaQuery default export large desktop alias', () => {
  it('exposes useIsLargeDesktop on the default export object', () => {
    expect(mediaQueryHooks.useIsLargeDesktop).toBe(useIsLargeDesktop);
  });
});

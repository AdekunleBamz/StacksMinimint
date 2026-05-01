import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { useIsLandscape } from './hooks/useMediaQuery';

describe('useMediaQuery default export landscape alias', () => {
  it('exposes useIsLandscape on the default export object', () => {
    expect(mediaQueryHooks.useIsLandscape).toBe(useIsLandscape);
  });
});

import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { useIsTablet } from './hooks/useMediaQuery';

describe('useMediaQuery default export tablet alias', () => {
  it('exposes useIsTablet on the default export object', () => {
    expect(mediaQueryHooks.useIsTablet).toBe(useIsTablet);
  });
});

import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { useHighContrast } from './hooks/useMediaQuery';

describe('useMediaQuery default export high contrast alias', () => {
  it('exposes useHighContrast on the default export object', () => {
    expect(mediaQueryHooks.useHighContrast).toBe(useHighContrast);
  });
});

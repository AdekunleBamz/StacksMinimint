import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { usePrefersDarkMode } from './hooks/useMediaQuery';

describe('useMediaQuery default export dark mode alias', () => {
  it('exposes usePrefersDarkMode on the default export object', () => {
    expect(mediaQueryHooks.usePrefersDarkMode).toBe(usePrefersDarkMode);
  });
});

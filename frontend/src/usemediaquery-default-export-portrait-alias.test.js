import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { useIsPortrait } from './hooks/useMediaQuery';

describe('useMediaQuery default export portrait alias', () => {
  it('exposes useIsPortrait on the default export object', () => {
    expect(mediaQueryHooks.useIsPortrait).toBe(useIsPortrait);
  });
});

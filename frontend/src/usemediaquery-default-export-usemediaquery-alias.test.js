import { describe, expect, it } from 'vitest';

import mediaQueryHooks, { useMediaQuery } from './hooks/useMediaQuery';

describe('useMediaQuery default export', () => {
  it('exposes useMediaQuery on the default export object', () => {
    expect(mediaQueryHooks.useMediaQuery).toBe(useMediaQuery);
  });
});

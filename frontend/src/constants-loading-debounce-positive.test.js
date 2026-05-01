import { describe, expect, it } from 'vitest';

import { LOADING_DEBOUNCE_MS } from './constants/index.js';

describe('LOADING_DEBOUNCE_MS constant', () => {
  it('stays above zero to avoid immediate spinner flashes', () => {
    expect(LOADING_DEBOUNCE_MS).toBeGreaterThan(0);
  });
});

import { describe, expect, it } from 'vitest';

import { SCROLL_DEBOUNCE_MS } from './constants/index.js';

describe('SCROLL_DEBOUNCE_MS constant', () => {
  it('stays positive for debounce scheduling', () => {
    expect(SCROLL_DEBOUNCE_MS).toBeGreaterThan(0);
  });
});

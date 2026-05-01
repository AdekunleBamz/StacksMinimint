import { describe, expect, it } from 'vitest';

import { SCROLL_THRESHOLD } from './constants/index.js';

describe('SCROLL_THRESHOLD constant', () => {
  it('stays greater than zero', () => {
    expect(SCROLL_THRESHOLD).toBeGreaterThan(0);
  });
});

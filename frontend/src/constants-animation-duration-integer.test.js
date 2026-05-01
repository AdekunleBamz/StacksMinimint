import { describe, expect, it } from 'vitest';

import { ANIMATION_DURATION_MS } from './constants/index.js';

describe('ANIMATION_DURATION_MS constant', () => {
  it('stays an integer millisecond value', () => {
    expect(Number.isInteger(ANIMATION_DURATION_MS)).toBe(true);
  });
});

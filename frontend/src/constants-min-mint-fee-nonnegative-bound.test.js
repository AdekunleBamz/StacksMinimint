import { describe, expect, it } from 'vitest';

import { MIN_MINT_FEE } from './constants/index.js';

describe('MIN_MINT_FEE constant', () => {
  it('does not drift below zero', () => {
    expect(MIN_MINT_FEE).toBeGreaterThanOrEqual(0);
  });
});

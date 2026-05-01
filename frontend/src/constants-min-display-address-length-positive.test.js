import { describe, expect, it } from 'vitest';

import { MIN_DISPLAY_ADDRESS_LENGTH } from './constants/index.js';

describe('MIN_DISPLAY_ADDRESS_LENGTH constant', () => {
  it('stays a positive integer', () => {
    expect(Number.isInteger(MIN_DISPLAY_ADDRESS_LENGTH)).toBe(true);
    expect(MIN_DISPLAY_ADDRESS_LENGTH).toBeGreaterThan(0);
  });
});

import { describe, expect, it } from 'vitest';
import { isValidRoyaltyBps } from './utils/validators.js';

describe('isValidRoyaltyBps upper guard', () => {
  it('rejects values above 10000', () => {
    expect(isValidRoyaltyBps(10001)).toBe(false);
  });
});

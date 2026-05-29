import { describe, expect, it } from 'vitest';
import { isValidRoyaltyBps } from './utils/validators.js';

describe('isValidRoyaltyBps minimum', () => {
  it('accepts zero royalties', () => {
    expect(isValidRoyaltyBps(0)).toBe(true);
  });
});

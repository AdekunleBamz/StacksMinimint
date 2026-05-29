import { describe, expect, it } from 'vitest';
import { isValidBidAmount } from './utils/validators.js';

describe('isValidBidAmount string input', () => {
  it('accepts positive numeric strings', () => {
    expect(isValidBidAmount('1')).toBe(true);
  });
});

import { describe, expect, it } from 'vitest';
import { isValidListingPrice } from './utils/validators.js';

describe('isValidListingPrice zero input', () => {
  it('rejects zero prices', () => {
    expect(isValidListingPrice(0)).toBe(false);
  });
});

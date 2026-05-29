import { describe, expect, it } from 'vitest';
import { isValidSupplyLimit } from './utils/validators.js';

describe('isValidSupplyLimit minimum', () => {
  it('accepts one as the minimum supply', () => {
    expect(isValidSupplyLimit(1)).toBe(true);
  });
});

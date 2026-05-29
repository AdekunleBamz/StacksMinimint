import { describe, expect, it } from 'vitest';
import { isValidSupplyLimit } from './utils/validators.js';

describe('isValidSupplyLimit zero input', () => {
  it('rejects zero supply', () => {
    expect(isValidSupplyLimit(0)).toBe(false);
  });
});

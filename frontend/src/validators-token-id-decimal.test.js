import { describe, expect, it } from 'vitest';
import { isValidTokenId } from './utils/validators.js';

describe('isValidTokenId decimal input', () => {
  it('rejects fractional token ids', () => {
    expect(isValidTokenId(1.5)).toBe(false);
  });
});

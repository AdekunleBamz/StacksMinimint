import { describe, expect, it } from 'vitest';
import { isValidTokenId } from './utils/validators.js';

describe('isValidTokenId zero input', () => {
  it('accepts zero token ids', () => {
    expect(isValidTokenId(0)).toBe(true);
  });
});

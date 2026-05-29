import { describe, expect, it } from 'vitest';
import { isValidTokenId } from './utils/validators.js';

describe('isValidTokenId null input', () => {
  it('rejects null token ids', () => {
    expect(isValidTokenId(null)).toBe(false);
  });
});

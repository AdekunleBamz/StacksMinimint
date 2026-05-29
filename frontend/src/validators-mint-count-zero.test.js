import { describe, expect, it } from 'vitest';
import { isValidMintCount } from './utils/validators.js';

describe('isValidMintCount zero input', () => {
  it('rejects zero mints', () => {
    expect(isValidMintCount(0)).toBe(false);
  });
});

import { describe, expect, it } from 'vitest';
import { isValidMintCount } from './utils/validators.js';

describe('isValidMintCount minimum', () => {
  it('accepts a single mint', () => {
    expect(isValidMintCount(1)).toBe(true);
  });
});

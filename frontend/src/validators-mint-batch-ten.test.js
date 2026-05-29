import { describe, expect, it } from 'vitest';
import { isValidMintBatch } from './utils/validators.js';

describe('isValidMintBatch upper bound', () => {
  it('accepts a batch of ten', () => {
    expect(isValidMintBatch(10)).toBe(true);
  });
});

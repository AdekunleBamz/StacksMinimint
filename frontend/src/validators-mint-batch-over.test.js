import { describe, expect, it } from 'vitest';
import { isValidMintBatch } from './utils/validators.js';

describe('isValidMintBatch upper guard', () => {
  it('rejects batches above ten', () => {
    expect(isValidMintBatch(11)).toBe(false);
  });
});

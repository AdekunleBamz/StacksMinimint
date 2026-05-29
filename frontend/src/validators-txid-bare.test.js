import { describe, expect, it } from 'vitest';
import { isValidTxId } from './utils/validators.js';

describe('isValidTxId bare input', () => {
  it('rejects txids without a prefix', () => {
    expect(isValidTxId('a'.repeat(64))).toBe(false);
  });
});

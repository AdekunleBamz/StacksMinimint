import { describe, expect, it } from 'vitest';
import { isValidTxId } from './utils/validators.js';

describe('isValidTxId valid input', () => {
  it('accepts prefixed hex txids', () => {
    expect(isValidTxId(`0x${'a'.repeat(64)}`)).toBe(true);
  });
});

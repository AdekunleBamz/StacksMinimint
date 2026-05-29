import { describe, expect, it } from 'vitest';
import { isValidCID } from './utils/validators.js';

describe('isValidCID trimmed input', () => {
  it('accepts values with enough trimmed content', () => {
    expect(isValidCID('  abcdefghij  ')).toBe(true);
  });
});

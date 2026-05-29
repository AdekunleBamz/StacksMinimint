import { describe, expect, it } from 'vitest';
import { isValidCID } from './utils/validators.js';

describe('isValidCID short input', () => {
  it('rejects short CIDs', () => {
    expect(isValidCID('abc')).toBe(false);
  });
});

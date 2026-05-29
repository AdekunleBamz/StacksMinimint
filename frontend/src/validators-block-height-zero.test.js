import { describe, expect, it } from 'vitest';
import { isValidBlockHeight } from './utils/validators.js';

describe('isValidBlockHeight zero input', () => {
  it('accepts block zero', () => {
    expect(isValidBlockHeight(0)).toBe(true);
  });
});

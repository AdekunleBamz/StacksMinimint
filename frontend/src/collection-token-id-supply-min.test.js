import { describe, expect, it } from 'vitest';
import { isValidTokenId } from './utils/collection.js';

describe('collection isValidTokenId minimum', () => {
  it('accepts token id one', () => {
    expect(isValidTokenId(1)).toBe(true);
  });
});

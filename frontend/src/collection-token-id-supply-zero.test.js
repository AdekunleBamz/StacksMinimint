import { describe, expect, it } from 'vitest';
import { isValidTokenId } from './utils/collection.js';

describe('collection isValidTokenId zero input', () => {
  it('rejects token id zero', () => {
    expect(isValidTokenId(0)).toBe(false);
  });
});

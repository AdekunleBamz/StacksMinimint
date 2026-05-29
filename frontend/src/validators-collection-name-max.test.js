import { describe, expect, it } from 'vitest';
import { isValidCollectionName } from './utils/validators.js';

describe('isValidCollectionName max length', () => {
  it('accepts sixty-four characters', () => {
    expect(isValidCollectionName('a'.repeat(64))).toBe(true);
  });
});

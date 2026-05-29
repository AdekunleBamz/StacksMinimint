import { describe, expect, it } from 'vitest';
import { isValidCollectionName } from './utils/validators.js';

describe('isValidCollectionName blank input', () => {
  it('rejects blank names', () => {
    expect(isValidCollectionName('   ')).toBe(false);
  });
});

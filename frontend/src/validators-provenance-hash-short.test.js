import { describe, expect, it } from 'vitest';
import { isValidProvenanceHash } from './utils/validators.js';

describe('isValidProvenanceHash short input', () => {
  it('rejects short hashes', () => {
    expect(isValidProvenanceHash('a'.repeat(63))).toBe(false);
  });
});

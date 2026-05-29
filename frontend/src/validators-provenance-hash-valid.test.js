import { describe, expect, it } from 'vitest';
import { isValidProvenanceHash } from './utils/validators.js';

describe('isValidProvenanceHash valid input', () => {
  it('accepts sixty-four hex characters', () => {
    expect(isValidProvenanceHash('a'.repeat(64))).toBe(true);
  });
});

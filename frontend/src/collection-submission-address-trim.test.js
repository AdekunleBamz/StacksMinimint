import { describe, expect, it } from 'vitest';
import { normalizeSubmissionAddress } from './utils/collection.js';

describe('normalizeSubmissionAddress trimming', () => {
  it('trims surrounding whitespace', () => {
    expect(normalizeSubmissionAddress('  SP123  ')).toBe('SP123');
  });
});

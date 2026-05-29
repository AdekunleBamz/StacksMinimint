import { describe, expect, it } from 'vitest';
import { normalizeSubmissionTokenURI } from './utils/collection.js';

describe('normalizeSubmissionTokenURI trimming', () => {
  it('trims surrounding whitespace', () => {
    expect(normalizeSubmissionTokenURI('  ipfs://abc  ')).toBe('ipfs://abc');
  });
});

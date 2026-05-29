import { describe, expect, it } from 'vitest';
import { normalizeExactTimestamp } from './utils/collection.js';

describe('normalizeExactTimestamp null input', () => {
  it('returns null for missing timestamps', () => {
    expect(normalizeExactTimestamp(null)).toBeNull();
  });
});

import { describe, expect, it } from 'vitest';
import { normalizeRelativeTimestamp } from './utils/collection.js';

describe('normalizeRelativeTimestamp null input', () => {
  it('returns null for missing timestamps', () => {
    expect(normalizeRelativeTimestamp(null)).toBeNull();
  });
});

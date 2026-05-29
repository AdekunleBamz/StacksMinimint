import { describe, expect, it } from 'vitest';
import { normalizeRelativeTimestamp } from './utils/collection.js';

describe('normalizeRelativeTimestamp seconds input', () => {
  it('converts unix seconds to milliseconds', () => {
    expect(normalizeRelativeTimestamp(1000)).toBe(1_000_000);
  });
});

import { describe, expect, it } from 'vitest';
import { formatSTX } from './utils/collection.js';

describe('formatSTX invalid input', () => {
  it('falls back to zero', () => {
    expect(formatSTX('abc')).toBe('0');
  });
});

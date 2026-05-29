import { describe, expect, it } from 'vitest';
import { formatSTXCompact } from './utils/collection.js';

describe('formatSTXCompact invalid input', () => {
  it('falls back to zero STX', () => {
    expect(formatSTXCompact(undefined)).toBe('0 STX');
  });
});

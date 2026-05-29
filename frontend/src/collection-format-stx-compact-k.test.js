import { describe, expect, it } from 'vitest';
import { formatSTXCompact } from './utils/collection.js';

describe('formatSTXCompact thousand input', () => {
  it('uses the K suffix for thousands of STX', () => {
    expect(formatSTXCompact(1_000_000_000)).toBe('1.0K STX');
  });
});

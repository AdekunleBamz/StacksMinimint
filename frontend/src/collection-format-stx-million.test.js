import { describe, expect, it } from 'vitest';
import { formatSTX } from './utils/collection.js';

describe('formatSTX one STX', () => {
  it('formats one million microSTX as one STX', () => {
    expect(formatSTX(1_000_000)).toBe('1');
  });
});

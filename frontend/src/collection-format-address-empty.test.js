import { describe, expect, it } from 'vitest';
import { formatAddress } from './utils/collection.js';

describe('formatAddress empty input', () => {
  it('returns an empty label', () => {
    expect(formatAddress('')).toBe('');
  });
});

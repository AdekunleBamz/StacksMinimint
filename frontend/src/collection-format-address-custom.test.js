import { describe, expect, it } from 'vitest';
import { formatAddress } from './utils/collection.js';

describe('formatAddress custom lengths', () => {
  it('uses custom start and end lengths', () => {
    expect(formatAddress('SP1234567890', 2, 2)).toBe('SP...90');
  });
});

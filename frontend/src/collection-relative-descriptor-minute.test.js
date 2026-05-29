import { describe, expect, it } from 'vitest';
import { getRelativeTimeDescriptor } from './utils/collection.js';

describe('getRelativeTimeDescriptor minute age', () => {
  it('formats minute-level age labels', () => {
    expect(getRelativeTimeDescriptor(940_000, 1_000_000).label).toBe('1m ago');
  });
});

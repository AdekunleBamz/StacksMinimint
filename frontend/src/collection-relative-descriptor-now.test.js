import { describe, expect, it } from 'vitest';
import { getRelativeTimeDescriptor } from './utils/collection.js';

describe('getRelativeTimeDescriptor current time', () => {
  it('labels current timestamps as just now', () => {
    expect(getRelativeTimeDescriptor(1_000_000, 1_000_000).label).toBe('Just now');
  });
});

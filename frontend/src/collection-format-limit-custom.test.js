import { describe, expect, it } from 'vitest';
import { formatLimit } from './utils/collection.js';

describe('formatLimit custom fallback', () => {
  it('uses custom fallback labels', () => {
    expect(formatLimit('', 'Any')).toBe('Any');
  });
});

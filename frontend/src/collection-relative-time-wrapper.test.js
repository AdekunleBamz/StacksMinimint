import { describe, expect, it } from 'vitest';
import { formatRelativeTime } from './utils/collection.js';

describe('formatRelativeTime missing input', () => {
  it('falls back to just now', () => {
    expect(formatRelativeTime(null)).toBe('Just now');
  });
});

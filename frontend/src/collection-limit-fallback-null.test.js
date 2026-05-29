import { describe, expect, it } from 'vitest';
import { isLimitFallback } from './utils/collection.js';

describe('isLimitFallback null input', () => {
  it('treats null as fallback', () => {
    expect(isLimitFallback(null)).toBe(true);
  });
});

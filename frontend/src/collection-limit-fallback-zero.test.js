import { describe, expect, it } from 'vitest';
import { isLimitFallback } from './utils/collection.js';

describe('isLimitFallback zero input', () => {
  it('does not treat zero as fallback', () => {
    expect(isLimitFallback(0)).toBe(false);
  });
});

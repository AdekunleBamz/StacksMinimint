import { describe, expect, it } from 'vitest';
import { isValidRevealDelay } from './utils/validators.js';

describe('isValidRevealDelay negative input', () => {
  it('rejects negative delays', () => {
    expect(isValidRevealDelay(-1)).toBe(false);
  });
});

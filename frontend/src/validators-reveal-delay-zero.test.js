import { describe, expect, it } from 'vitest';
import { isValidRevealDelay } from './utils/validators.js';

describe('isValidRevealDelay zero input', () => {
  it('accepts zero delay', () => {
    expect(isValidRevealDelay(0)).toBe(true);
  });
});

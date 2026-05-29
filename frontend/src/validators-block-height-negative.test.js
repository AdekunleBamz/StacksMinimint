import { describe, expect, it } from 'vitest';
import { isValidBlockHeight } from './utils/validators.js';

describe('isValidBlockHeight negative input', () => {
  it('rejects negative heights', () => {
    expect(isValidBlockHeight(-1)).toBe(false);
  });
});

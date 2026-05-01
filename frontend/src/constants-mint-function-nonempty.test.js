import { describe, expect, it } from 'vitest';

import { MINT_FUNCTION } from './constants/index.js';

describe('MINT_FUNCTION constant', () => {
  it('remains non-empty contract function text', () => {
    expect(typeof MINT_FUNCTION).toBe('string');
    expect(MINT_FUNCTION.trim().length).toBeGreaterThan(0);
  });
});

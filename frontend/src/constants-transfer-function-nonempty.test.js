import { describe, expect, it } from 'vitest';

import { TRANSFER_FUNCTION } from './constants/index.js';

describe('TRANSFER_FUNCTION constant', () => {
  it('remains non-empty contract function text', () => {
    expect(typeof TRANSFER_FUNCTION).toBe('string');
    expect(TRANSFER_FUNCTION.trim().length).toBeGreaterThan(0);
  });
});

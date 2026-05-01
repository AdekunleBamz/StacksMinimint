import { describe, expect, it } from 'vitest';

import { MAX_RETRIES } from './constants/index.js';

describe('MAX_RETRIES constant', () => {
  it('remains a positive integer', () => {
    expect(Number.isInteger(MAX_RETRIES)).toBe(true);
    expect(MAX_RETRIES).toBeGreaterThan(0);
  });
});

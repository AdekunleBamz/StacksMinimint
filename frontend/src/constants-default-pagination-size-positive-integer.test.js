import { describe, expect, it } from 'vitest';

import { DEFAULT_PAGINATION_SIZE } from './constants/index.js';

describe('DEFAULT_PAGINATION_SIZE constant', () => {
  it('stays a positive integer', () => {
    expect(Number.isInteger(DEFAULT_PAGINATION_SIZE)).toBe(true);
    expect(DEFAULT_PAGINATION_SIZE).toBeGreaterThan(0);
  });
});

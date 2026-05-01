import { describe, expect, it } from 'vitest';

import { GET_TOTAL_SUPPLY } from './constants/index.js';

describe('GET_TOTAL_SUPPLY constant', () => {
  it('remains non-empty contract function text', () => {
    expect(typeof GET_TOTAL_SUPPLY).toBe('string');
    expect(GET_TOTAL_SUPPLY.trim().length).toBeGreaterThan(0);
  });
});

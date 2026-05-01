import { describe, expect, it } from 'vitest';

import { TX_STATUS } from './constants/index.js';

describe('TX_STATUS constant values', () => {
  it('remain unique to avoid ambiguous UI state mapping', () => {
    const values = Object.values(TX_STATUS);
    expect(new Set(values).size).toBe(values.length);
  });
});

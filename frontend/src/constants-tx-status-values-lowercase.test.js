import { describe, expect, it } from 'vitest';

import { TX_STATUS } from './constants/index.js';

describe('TX_STATUS constant casing', () => {
  it('keeps status values lowercase for display consistency', () => {
    const values = Object.values(TX_STATUS);
    expect(values.every((value) => value === value.toLowerCase())).toBe(true);
  });
});

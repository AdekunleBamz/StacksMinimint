import { describe, expect, it } from 'vitest';

import { MAINNET_LABEL } from './constants/index.js';

describe('MAINNET_LABEL constant', () => {
  it('remains non-empty display text', () => {
    expect(MAINNET_LABEL.trim().length).toBeGreaterThan(0);
  });
});

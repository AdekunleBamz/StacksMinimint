import { describe, expect, it } from 'vitest';

import { TESTNET_LABEL } from './constants/index.js';

describe('TESTNET_LABEL constant', () => {
  it('remains non-empty display text', () => {
    expect(TESTNET_LABEL.trim().length).toBeGreaterThan(0);
  });
});

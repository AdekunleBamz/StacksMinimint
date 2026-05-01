import { describe, expect, it } from 'vitest';

import { DEVNET_LABEL } from './constants/index.js';

describe('DEVNET_LABEL constant', () => {
  it('remains non-empty display text', () => {
    expect(DEVNET_LABEL.trim().length).toBeGreaterThan(0);
  });
});

import { describe, expect, it } from 'vitest';

import { MINT_ACTIVITY_POLL_INTERVAL_MS } from './constants/index.js';

describe('MINT_ACTIVITY_POLL_INTERVAL_MS constant', () => {
  it('stays aligned to whole-second polling intervals', () => {
    expect(MINT_ACTIVITY_POLL_INTERVAL_MS % 1000).toBe(0);
  });
});

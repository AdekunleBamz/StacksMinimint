import { describe, expect, it } from 'vitest';

import constants, { MINT_ACTIVITY_POLL_INTERVAL_MS } from './constants/index.js';

describe('constants default export MINT_ACTIVITY_POLL_INTERVAL_MS alias', () => {
  it('maps MINT_ACTIVITY_POLL_INTERVAL_MS on the default export object', () => {
    expect(constants.MINT_ACTIVITY_POLL_INTERVAL_MS).toBe(MINT_ACTIVITY_POLL_INTERVAL_MS);
  });
});

import { describe, expect, it } from 'vitest';

import constants, { TRANSACTION_TIMEOUT_MS } from './constants/index.js';

describe('constants default export TRANSACTION_TIMEOUT_MS alias', () => {
  it('maps TRANSACTION_TIMEOUT_MS on the default export object', () => {
    expect(constants.TRANSACTION_TIMEOUT_MS).toBe(TRANSACTION_TIMEOUT_MS);
  });
});

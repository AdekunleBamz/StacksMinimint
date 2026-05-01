import { describe, expect, it } from 'vitest';

import constants, { TX_RETRY_LIMIT } from './constants/index.js';

describe('constants default export TX_RETRY_LIMIT alias', () => {
  it('maps TX_RETRY_LIMIT on the default export object', () => {
    expect(constants.TX_RETRY_LIMIT).toBe(TX_RETRY_LIMIT);
  });
});

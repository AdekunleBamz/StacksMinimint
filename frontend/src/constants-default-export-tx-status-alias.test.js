import { describe, expect, it } from 'vitest';

import constants, { TX_STATUS } from './constants/index.js';

describe('constants default export TX_STATUS alias', () => {
  it('maps TX_STATUS on the default export object', () => {
    expect(constants.TX_STATUS).toBe(TX_STATUS);
  });
});

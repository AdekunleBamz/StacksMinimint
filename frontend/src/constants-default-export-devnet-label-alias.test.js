import { describe, expect, it } from 'vitest';

import constants, { DEVNET_LABEL } from './constants/index.js';

describe('constants default export DEVNET_LABEL alias', () => {
  it('maps DEVNET_LABEL on the default export object', () => {
    expect(constants.DEVNET_LABEL).toBe(DEVNET_LABEL);
  });
});

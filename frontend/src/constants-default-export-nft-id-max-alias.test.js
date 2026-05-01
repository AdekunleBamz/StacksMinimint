import { describe, expect, it } from 'vitest';

import constants, { NFT_ID_MAX } from './constants/index.js';

describe('constants default export NFT_ID_MAX alias', () => {
  it('maps NFT_ID_MAX on the default export object', () => {
    expect(constants.NFT_ID_MAX).toBe(NFT_ID_MAX);
  });
});

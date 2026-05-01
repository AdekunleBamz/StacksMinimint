import { describe, expect, it } from 'vitest';

import constants, { NFT_ID_MIN } from './constants/index.js';

describe('constants default export NFT_ID_MIN alias', () => {
  it('maps NFT_ID_MIN on the default export object', () => {
    expect(constants.NFT_ID_MIN).toBe(NFT_ID_MIN);
  });
});

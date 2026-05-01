import { describe, expect, it } from 'vitest';

import constants, { MIN_MINT_FEE } from './constants/index.js';

describe('constants default export MIN_MINT_FEE alias', () => {
  it('maps MIN_MINT_FEE on the default export object', () => {
    expect(constants.MIN_MINT_FEE).toBe(MIN_MINT_FEE);
  });
});

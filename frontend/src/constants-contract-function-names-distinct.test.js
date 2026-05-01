import { describe, expect, it } from 'vitest';

import { MINT_FUNCTION, TRANSFER_FUNCTION } from './constants/index.js';

describe('core contract function names', () => {
  it('keep mint and transfer function names distinct', () => {
    expect(MINT_FUNCTION).not.toBe(TRANSFER_FUNCTION);
  });
});

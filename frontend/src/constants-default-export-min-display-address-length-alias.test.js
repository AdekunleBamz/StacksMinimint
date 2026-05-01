import { describe, expect, it } from 'vitest';

import constants, { MIN_DISPLAY_ADDRESS_LENGTH } from './constants/index.js';

describe('constants default export MIN_DISPLAY_ADDRESS_LENGTH alias', () => {
  it('maps MIN_DISPLAY_ADDRESS_LENGTH on the default export object', () => {
    expect(constants.MIN_DISPLAY_ADDRESS_LENGTH).toBe(MIN_DISPLAY_ADDRESS_LENGTH);
  });
});

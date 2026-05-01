import { describe, expect, it } from 'vitest';

import constants, { SCROLL_DEBOUNCE_MS } from './constants/index.js';

describe('constants default export SCROLL_DEBOUNCE_MS alias', () => {
  it('maps SCROLL_DEBOUNCE_MS on the default export object', () => {
    expect(constants.SCROLL_DEBOUNCE_MS).toBe(SCROLL_DEBOUNCE_MS);
  });
});

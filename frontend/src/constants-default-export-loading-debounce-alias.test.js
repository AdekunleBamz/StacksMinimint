import { describe, expect, it } from 'vitest';

import constants, { LOADING_DEBOUNCE_MS } from './constants/index.js';

describe('constants default export LOADING_DEBOUNCE_MS alias', () => {
  it('maps LOADING_DEBOUNCE_MS on the default export object', () => {
    expect(constants.LOADING_DEBOUNCE_MS).toBe(LOADING_DEBOUNCE_MS);
  });
});

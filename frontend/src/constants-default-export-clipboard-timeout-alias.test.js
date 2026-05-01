import { describe, expect, it } from 'vitest';

import constants, { CLIPBOARD_TIMEOUT_MS } from './constants/index.js';

describe('constants default export CLIPBOARD_TIMEOUT_MS alias', () => {
  it('maps CLIPBOARD_TIMEOUT_MS on the default export object', () => {
    expect(constants.CLIPBOARD_TIMEOUT_MS).toBe(CLIPBOARD_TIMEOUT_MS);
  });
});

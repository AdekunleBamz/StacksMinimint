import { describe, expect, it } from 'vitest';

import constants, { MAX_RETRIES } from './constants/index.js';

describe('constants default export MAX_RETRIES alias', () => {
  it('maps MAX_RETRIES on the default export object', () => {
    expect(constants.MAX_RETRIES).toBe(MAX_RETRIES);
  });
});

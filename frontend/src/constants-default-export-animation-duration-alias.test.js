import { describe, expect, it } from 'vitest';

import constants, { ANIMATION_DURATION_MS } from './constants/index.js';

describe('constants default export ANIMATION_DURATION_MS alias', () => {
  it('maps ANIMATION_DURATION_MS on the default export object', () => {
    expect(constants.ANIMATION_DURATION_MS).toBe(ANIMATION_DURATION_MS);
  });
});

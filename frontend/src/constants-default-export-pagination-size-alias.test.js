import { describe, expect, it } from 'vitest';

import constants, { DEFAULT_PAGINATION_SIZE } from './constants/index.js';

describe('constants default export DEFAULT_PAGINATION_SIZE alias', () => {
  it('maps DEFAULT_PAGINATION_SIZE on the default export object', () => {
    expect(constants.DEFAULT_PAGINATION_SIZE).toBe(DEFAULT_PAGINATION_SIZE);
  });
});

import { describe, expect, it } from 'vitest';

import { UNKNOWN_ADDRESS } from './constants/index.js';

describe('UNKNOWN_ADDRESS constant', () => {
  it('remains non-empty fallback copy', () => {
    expect(UNKNOWN_ADDRESS.trim().length).toBeGreaterThan(0);
  });
});

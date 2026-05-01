import { describe, expect, it } from 'vitest';

import { FAILED_LABEL } from './constants/index.js';

describe('FAILED_LABEL constant', () => {
  it('remains non-empty fallback copy', () => {
    expect(FAILED_LABEL.trim().length).toBeGreaterThan(0);
  });
});

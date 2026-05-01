import { describe, expect, it } from 'vitest';

import { PENDING_LABEL } from './constants/index.js';

describe('PENDING_LABEL constant', () => {
  it('remains non-empty fallback copy', () => {
    expect(PENDING_LABEL.trim().length).toBeGreaterThan(0);
  });
});

import { describe, expect, it } from 'vitest';

import { TX_RETRY_LIMIT } from './constants/index.js';

describe('TX_RETRY_LIMIT constant', () => {
  it('remains a positive integer', () => {
    expect(Number.isInteger(TX_RETRY_LIMIT)).toBe(true);
    expect(TX_RETRY_LIMIT).toBeGreaterThan(0);
  });
});

import { describe, expect, it } from 'vitest';

import useTransactionDefault, { useTransactionStatus } from './hooks/useTransaction';

describe('useTransaction default export', () => {
  it('maps to the named useTransactionStatus export', () => {
    expect(useTransactionDefault).toBe(useTransactionStatus);
  });
});

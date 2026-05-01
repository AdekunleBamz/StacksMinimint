import { describe, expect, it } from 'vitest';

import { useTransactionStatus } from './hooks';
import { useTransactionStatus as useTransactionStatusFromModule } from './hooks/useTransaction';

describe('hooks index useTransactionStatus named alias', () => {
  it('re-exports useTransactionStatus from the transaction hook module', () => {
    expect(useTransactionStatus).toBe(useTransactionStatusFromModule);
  });
});

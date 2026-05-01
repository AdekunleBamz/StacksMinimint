import { describe, expect, it } from 'vitest';

import { useTransactionDefault } from './hooks';
import useTransactionDefaultExport from './hooks/useTransaction';

describe('hooks index transaction default alias', () => {
  it('re-exports useTransactionDefault from useTransaction default export', () => {
    expect(useTransactionDefault).toBe(useTransactionDefaultExport);
  });
});

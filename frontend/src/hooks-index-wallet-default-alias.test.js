import { describe, expect, it } from 'vitest';

import { useWalletDefault } from './hooks';
import useStacksWalletDefault from './hooks/useStacksWallet';

describe('hooks index wallet default alias', () => {
  it('re-exports useWalletDefault from useStacksWallet default export', () => {
    expect(useWalletDefault).toBe(useStacksWalletDefault);
  });
});

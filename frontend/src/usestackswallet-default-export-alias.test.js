import { describe, expect, it } from 'vitest';

import useStacksWalletDefault, { useStacksWallet } from './hooks/useStacksWallet';

describe('useStacksWallet default export', () => {
  it('maps to the named useStacksWallet export', () => {
    expect(useStacksWalletDefault).toBe(useStacksWallet);
  });
});

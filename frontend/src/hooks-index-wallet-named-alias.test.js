import { describe, expect, it } from 'vitest';

import { useWallet } from './hooks';
import { useStacksWallet } from './hooks/useStacksWallet';

describe('hooks index wallet named alias', () => {
  it('re-exports useWallet as useStacksWallet', () => {
    expect(useWallet).toBe(useStacksWallet);
  });
});

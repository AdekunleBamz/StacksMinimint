import { describe, expect, it } from 'vitest';

import { useContractDefault } from './hooks';
import useStacksContractDefault from './hooks/useStacksContract';

describe('hooks index contract default alias', () => {
  it('re-exports useContractDefault from useStacksContract default export', () => {
    expect(useContractDefault).toBe(useStacksContractDefault);
  });
});

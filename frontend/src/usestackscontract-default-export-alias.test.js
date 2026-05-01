import { describe, expect, it } from 'vitest';

import useStacksContractDefault, { useStacksContract } from './hooks/useStacksContract';

describe('useStacksContract default export', () => {
  it('maps to the named useStacksContract export', () => {
    expect(useStacksContractDefault).toBe(useStacksContract);
  });
});

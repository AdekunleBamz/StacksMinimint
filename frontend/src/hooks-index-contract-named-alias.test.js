import { describe, expect, it } from 'vitest';

import { useContract } from './hooks';
import { useStacksContract } from './hooks/useStacksContract';

describe('hooks index contract named alias', () => {
  it('re-exports useContract as useStacksContract', () => {
    expect(useContract).toBe(useStacksContract);
  });
});

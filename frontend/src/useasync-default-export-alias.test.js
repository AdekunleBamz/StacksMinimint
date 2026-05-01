import { describe, expect, it } from 'vitest';

import useAsyncDefault, { useAsync } from './hooks/useAsync';

describe('useAsync default export', () => {
  it('maps to the named useAsync export', () => {
    expect(useAsyncDefault).toBe(useAsync);
  });
});

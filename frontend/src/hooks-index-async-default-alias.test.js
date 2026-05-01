import { describe, expect, it } from 'vitest';

import { useAsyncDefault } from './hooks';
import useAsyncDefaultExport from './hooks/useAsync';

describe('hooks index async default alias', () => {
  it('re-exports useAsyncDefault from useAsync default export', () => {
    expect(useAsyncDefault).toBe(useAsyncDefaultExport);
  });
});

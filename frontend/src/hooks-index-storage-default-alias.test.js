import { describe, expect, it } from 'vitest';

import { useStorageDefault } from './hooks';
import useStorageDefaultExport from './hooks/useStorage';

describe('hooks index storage default alias', () => {
  it('re-exports useStorageDefault from useStorage default export', () => {
    expect(useStorageDefault).toBe(useStorageDefaultExport);
  });
});

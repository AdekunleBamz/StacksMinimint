import { describe, expect, it } from 'vitest';

import useStorageDefault, { useSessionStorage } from './hooks/useStorage';

describe('useStorage default export session alias', () => {
  it('exposes useSessionStorage on the default export object', () => {
    expect(useStorageDefault.useSessionStorage).toBe(useSessionStorage);
  });
});

import { describe, expect, it } from 'vitest';

import useStorageDefault, { useLocalStorage } from './hooks/useStorage';

describe('useStorage default export local alias', () => {
  it('exposes useLocalStorage on the default export object', () => {
    expect(useStorageDefault.useLocalStorage).toBe(useLocalStorage);
  });
});

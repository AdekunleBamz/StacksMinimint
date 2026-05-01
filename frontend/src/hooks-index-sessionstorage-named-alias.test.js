import { describe, expect, it } from 'vitest';

import { useSessionStorage } from './hooks';
import { useSessionStorage as useSessionStorageFromModule } from './hooks/useStorage';

describe('hooks index session storage named alias', () => {
  it('re-exports useSessionStorage from the storage hook module', () => {
    expect(useSessionStorage).toBe(useSessionStorageFromModule);
  });
});

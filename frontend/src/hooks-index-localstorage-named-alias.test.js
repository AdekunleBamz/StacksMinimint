import { describe, expect, it } from 'vitest';

import { useLocalStorage } from './hooks';
import { useLocalStorage as useLocalStorageFromModule } from './hooks/useStorage';

describe('hooks index local storage named alias', () => {
  it('re-exports useLocalStorage from the storage hook module', () => {
    expect(useLocalStorage).toBe(useLocalStorageFromModule);
  });
});

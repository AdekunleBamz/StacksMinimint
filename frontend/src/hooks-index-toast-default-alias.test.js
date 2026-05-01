import { describe, expect, it } from 'vitest';

import { useToastDefault } from './hooks';
import useToastDefaultExport from './hooks/useToast';

describe('hooks index toast default alias', () => {
  it('re-exports useToastDefault from useToast default export', () => {
    expect(useToastDefault).toBe(useToastDefaultExport);
  });
});

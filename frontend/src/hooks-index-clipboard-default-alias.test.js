import { describe, expect, it } from 'vitest';

import { useClipboardDefault } from './hooks';
import useClipboardDefaultExport from './hooks/useClipboard';

describe('hooks index clipboard default alias', () => {
  it('re-exports useClipboardDefault from useClipboard default export', () => {
    expect(useClipboardDefault).toBe(useClipboardDefaultExport);
  });
});

import { describe, expect, it } from 'vitest';

import useClipboardDefault, { useClipboard } from './hooks/useClipboard';

describe('useClipboard default export', () => {
  it('maps to the named useClipboard export', () => {
    expect(useClipboardDefault).toBe(useClipboard);
  });
});

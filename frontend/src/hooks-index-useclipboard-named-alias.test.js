import { describe, expect, it } from 'vitest';

import { useClipboard } from './hooks';
import { useClipboard as useClipboardFromModule } from './hooks/useClipboard';

describe('hooks index useClipboard named alias', () => {
  it('re-exports useClipboard from the clipboard hook module', () => {
    expect(useClipboard).toBe(useClipboardFromModule);
  });
});

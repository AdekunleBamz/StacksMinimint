import { describe, expect, it } from 'vitest';

import useToastDefault, { useToast } from './hooks/useToast';

describe('useToast default export', () => {
  it('maps to the named useToast export', () => {
    expect(useToastDefault).toBe(useToast);
  });
});

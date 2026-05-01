import { describe, expect, it } from 'vitest';

import { normalizeToastType } from './hooks/useToast';

describe('normalizeToastType uppercase fallback', () => {
  it('falls back to info for uppercase variant names', () => {
    expect(normalizeToastType('SUCCESS')).toBe('info');
  });
});

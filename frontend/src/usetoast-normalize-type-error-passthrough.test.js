import { describe, expect, it } from 'vitest';

import { normalizeToastType } from './hooks/useToast';

describe('normalizeToastType error passthrough', () => {
  it('preserves the error variant', () => {
    expect(normalizeToastType('error')).toBe('error');
  });
});

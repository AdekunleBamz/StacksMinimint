import { describe, expect, it } from 'vitest';

import { normalizeToastType } from './hooks/useToast';

describe('normalizeToastType warning passthrough', () => {
  it('preserves the warning variant', () => {
    expect(normalizeToastType('warning')).toBe('warning');
  });
});

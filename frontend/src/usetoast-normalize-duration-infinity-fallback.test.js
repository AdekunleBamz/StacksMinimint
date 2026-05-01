import { describe, expect, it } from 'vitest';

import { normalizeToastDuration } from './hooks/useToast';

describe('normalizeToastDuration infinity fallback', () => {
  it('falls back when duration is Infinity', () => {
    expect(normalizeToastDuration(Number.POSITIVE_INFINITY, 3333)).toBe(3333);
  });
});

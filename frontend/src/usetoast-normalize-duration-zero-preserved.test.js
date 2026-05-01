import { describe, expect, it } from 'vitest';

import { normalizeToastDuration } from './hooks/useToast';

describe('normalizeToastDuration zero preservation', () => {
  it('preserves zero duration for persistent toasts', () => {
    expect(normalizeToastDuration(0)).toBe(0);
  });
});

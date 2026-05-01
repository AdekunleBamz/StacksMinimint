import { describe, expect, it } from 'vitest';

import { normalizeToastDuration } from './hooks/useToast';

describe('normalizeToastDuration decimal preservation', () => {
  it('preserves positive decimal durations', () => {
    expect(normalizeToastDuration(1200.5)).toBe(1200.5);
  });
});

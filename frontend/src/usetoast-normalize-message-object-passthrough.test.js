import { describe, expect, it } from 'vitest';

import { normalizeToastMessage } from './hooks/useToast';

describe('normalizeToastMessage object passthrough', () => {
  it('returns object input unchanged', () => {
    const input = { message: 'Minting' };
    expect(normalizeToastMessage(input)).toBe(input);
  });
});

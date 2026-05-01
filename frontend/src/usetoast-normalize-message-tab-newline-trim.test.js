import { describe, expect, it } from 'vitest';

import { normalizeToastMessage } from './hooks/useToast';

describe('normalizeToastMessage tab and newline trim', () => {
  it('trims tabs and newlines around string content', () => {
    expect(normalizeToastMessage('\n\t Mint ready \t\n')).toBe('Mint ready');
  });
});

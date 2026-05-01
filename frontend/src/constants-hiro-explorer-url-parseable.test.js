import { describe, expect, it } from 'vitest';

import { HIRO_EXPLORER_URL } from './constants/index.js';

describe('HIRO_EXPLORER_URL constant', () => {
  it('stays a valid absolute URL', () => {
    expect(() => new URL(HIRO_EXPLORER_URL)).not.toThrow();
    expect(HIRO_EXPLORER_URL.startsWith('https://')).toBe(true);
  });
});

import { describe, expect, it } from 'vitest';
import { isValidRarityTier } from './utils/validators.js';

describe('isValidRarityTier uppercase input', () => {
  it('rejects uppercase rarity labels', () => {
    expect(isValidRarityTier('LEGENDARY')).toBe(false);
  });
});

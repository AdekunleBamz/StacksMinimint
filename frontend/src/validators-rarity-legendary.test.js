import { describe, expect, it } from 'vitest';
import { isValidRarityTier } from './utils/validators.js';

describe('isValidRarityTier legendary input', () => {
  it('accepts legendary rarity', () => {
    expect(isValidRarityTier('legendary')).toBe(true);
  });
});

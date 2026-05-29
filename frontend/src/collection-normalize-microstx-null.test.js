import { describe, expect, it } from 'vitest';
import { normalizeMicrostxInput } from './utils/collection.js';

describe('normalizeMicrostxInput null input', () => {
  it('returns null for null values', () => {
    expect(normalizeMicrostxInput(null)).toBeNull();
  });
});

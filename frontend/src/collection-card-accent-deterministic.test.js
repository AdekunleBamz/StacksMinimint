import { describe, expect, it } from 'vitest';
import { getCardAccent } from './utils/collection.js';

describe('getCardAccent deterministic output', () => {
  it('returns the same accent for the same seed', () => {
    expect(getCardAccent('seed')).toStrictEqual(getCardAccent('seed'));
  });
});

import { describe, expect, it } from 'vitest';
import { normalizeMicrostxInput } from './utils/collection.js';

describe('normalizeMicrostxInput string input', () => {
  it('parses trimmed numeric strings', () => {
    expect(normalizeMicrostxInput(' 1000000 ')).toBe(1000000);
  });
});

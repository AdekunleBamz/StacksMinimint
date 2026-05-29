import { describe, expect, it } from 'vitest';
import { isValidMetadataVersion } from './utils/validators.js';

describe('isValidMetadataVersion minimum', () => {
  it('accepts version one', () => {
    expect(isValidMetadataVersion(1)).toBe(true);
  });
});

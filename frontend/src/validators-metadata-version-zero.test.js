import { describe, expect, it } from 'vitest';
import { isValidMetadataVersion } from './utils/validators.js';

describe('isValidMetadataVersion zero input', () => {
  it('rejects zero versions', () => {
    expect(isValidMetadataVersion(0)).toBe(false);
  });
});

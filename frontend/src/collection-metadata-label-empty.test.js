import { describe, expect, it } from 'vitest';
import { getMetadataLabel } from './utils/collection.js';

describe('getMetadataLabel empty input', () => {
  it('uses the missing metadata label', () => {
    expect(getMetadataLabel('')).toBe('Metadata URI');
  });
});

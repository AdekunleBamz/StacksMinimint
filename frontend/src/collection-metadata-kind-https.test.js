import { describe, expect, it } from 'vitest';
import { getMetadataKind } from './utils/collection.js';

describe('getMetadataKind https input', () => {
  it('detects HTTPS metadata', () => {
    expect(getMetadataKind('https://example.com/meta.json')).toBe('https');
  });
});

import { describe, expect, it } from 'vitest';
import { getMetadataKind } from './utils/collection.js';

describe('getMetadataKind ipfs input', () => {
  it('detects IPFS metadata', () => {
    expect(getMetadataKind('ipfs://abc')).toBe('ipfs');
  });
});

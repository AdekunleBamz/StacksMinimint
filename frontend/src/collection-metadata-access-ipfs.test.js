import { describe, expect, it } from 'vitest';
import { getMetadataAccessDescriptor } from './utils/collection.js';

describe('getMetadataAccessDescriptor ipfs input', () => {
  it('marks IPFS metadata as accessible', () => {
    expect(getMetadataAccessDescriptor('ipfs://abc').kind).toBe('ipfs');
  });
});

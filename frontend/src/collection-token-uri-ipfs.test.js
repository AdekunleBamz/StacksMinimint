import { describe, expect, it } from 'vitest';
import { validateTokenURI } from './utils/collection.js';

describe('validateTokenURI ipfs input', () => {
  it('accepts IPFS token URIs', () => {
    expect(validateTokenURI('ipfs://abcdef1234').isValid).toBe(true);
  });
});

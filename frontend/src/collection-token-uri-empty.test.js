import { describe, expect, it } from 'vitest';
import { validateTokenURI } from './utils/collection.js';

describe('validateTokenURI empty input', () => {
  it('rejects empty token URIs', () => {
    expect(validateTokenURI('').isValid).toBe(false);
  });
});

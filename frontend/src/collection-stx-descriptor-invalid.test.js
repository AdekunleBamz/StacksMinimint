import { describe, expect, it } from 'vitest';
import { getSTXFormatDescriptor } from './utils/collection.js';

describe('getSTXFormatDescriptor invalid input', () => {
  it('marks invalid values', () => {
    expect(getSTXFormatDescriptor('nope').isValid).toBe(false);
  });
});

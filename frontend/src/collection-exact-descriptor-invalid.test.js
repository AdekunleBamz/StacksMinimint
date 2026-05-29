import { describe, expect, it } from 'vitest';
import { getExactTimeDescriptor } from './utils/collection.js';

describe('getExactTimeDescriptor invalid input', () => {
  it('marks invalid timestamps', () => {
    expect(getExactTimeDescriptor(undefined).isValid).toBe(false);
  });
});

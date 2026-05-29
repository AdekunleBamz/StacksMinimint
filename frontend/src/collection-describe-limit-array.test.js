import { describe, expect, it } from 'vitest';
import { describeLimit } from './utils/collection.js';

describe('describeLimit array input', () => {
  it('reports array value types', () => {
    expect(describeLimit([1]).valueType).toBe('array');
  });
});

import { describe, expect, it } from 'vitest';
import { extractGatewayHost } from './utils/collection.js';

describe('extractGatewayHost invalid input', () => {
  it('returns an empty host for invalid URLs', () => {
    expect(extractGatewayHost('not a url')).toBeNull();
  });
});

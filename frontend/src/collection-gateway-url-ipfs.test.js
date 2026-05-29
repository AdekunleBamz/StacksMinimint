import { describe, expect, it } from 'vitest';
import { getMetadataGatewayUrl } from './utils/collection.js';

describe('getMetadataGatewayUrl ipfs input', () => {
  it('rewrites IPFS URIs through a gateway', () => {
    expect(getMetadataGatewayUrl('ipfs://abc')).toContain('/ipfs/abc');
  });
});

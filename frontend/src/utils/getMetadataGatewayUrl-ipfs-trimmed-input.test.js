import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

describe('getMetadataGatewayUrl', () => {
  it('trims surrounding whitespace around ipfs URIs', () => {
    expect(getMetadataGatewayUrl('  ipfs://bafy123  ')).toBe('https://ipfs.io/ipfs/bafy123')
  })
})

import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('normalizes hostnames when URL scheme casing varies', () => {
    expect(extractGatewayHost('HTTPS://IPFS.IO/ipfs/bafy')).toBe('ipfs.io')
  })
})

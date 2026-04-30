import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('returns the hostname without port details', () => {
    expect(extractGatewayHost('https://gateway.example.com:8443/ipfs/data')).toBe('gateway.example.com')
  })
})

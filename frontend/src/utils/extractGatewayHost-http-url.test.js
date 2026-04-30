import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('returns the hostname for a valid https URL', () => {
    expect(extractGatewayHost('https://ipfs.io/ipfs/bafy')).toBe('ipfs.io')
  })
})

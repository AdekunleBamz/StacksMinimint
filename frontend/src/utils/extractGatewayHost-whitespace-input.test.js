import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('handles surrounding whitespace in URL input', () => {
    expect(extractGatewayHost('  https://ipfs.io/ipfs/bafy  ')).toBe('ipfs.io')
  })
})

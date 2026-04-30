import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('supports IPv6 hosts in bracket notation', () => {
    expect(extractGatewayHost('https://[2001:db8::1]/ipfs/data')).toBe('[2001:db8::1]')
  })
})

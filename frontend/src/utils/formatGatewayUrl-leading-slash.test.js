import { describe, expect, it } from 'vitest'
import { formatGatewayUrl } from './format'

describe('formatGatewayUrl', () => {
  it('normalizes leading slashes in CID values', () => {
    expect(formatGatewayUrl('/bafy123')).toBe('https://ipfs.io/ipfs/bafy123')
  })
})

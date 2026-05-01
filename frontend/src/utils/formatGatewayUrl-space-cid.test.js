import { describe, expect, it } from 'vitest'
import { formatGatewayUrl } from './format'

describe('formatGatewayUrl', () => {
  it('preserves space characters inside provided cid values', () => {
    expect(formatGatewayUrl('cid with space')).toBe('https://ipfs.io/ipfs/cid with space')
  })
})

import { describe, expect, it } from 'vitest'
import { formatGatewayUrl } from './format'

describe('formatGatewayUrl', () => {
  it('returns gateway root when CID is empty', () => {
    expect(formatGatewayUrl('')).toBe('https://ipfs.io/ipfs/')
  })
})

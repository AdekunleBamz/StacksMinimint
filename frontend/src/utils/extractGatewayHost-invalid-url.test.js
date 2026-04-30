import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('returns null for malformed URL values', () => {
    expect(extractGatewayHost('not a valid url')).toBeNull()
  })
})

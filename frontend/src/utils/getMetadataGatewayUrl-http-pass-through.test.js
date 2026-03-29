import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

// Regression note: preserve getMetadataGatewayUrl http pass through behavior coverage.
describe('getMetadataGatewayUrl', () => {
  it('returns http URLs unchanged', () => {
    const url = 'http://example.com/meta.json'
    expect(getMetadataGatewayUrl(url)).toBe(url)
  })
})

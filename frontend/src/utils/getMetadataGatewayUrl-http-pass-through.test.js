import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

describe('getMetadataGatewayUrl', () => {
  it('returns http URLs unchanged', () => {
    const url = 'http://example.com/meta.json'
    expect(getMetadataGatewayUrl(url)).toBe(url)
  })
})

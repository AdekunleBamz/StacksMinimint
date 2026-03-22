import { describe, expect, it } from 'vitest'
import { getMetadataGatewayUrl } from './collection'

describe('getMetadataGatewayUrl', () => {
  it('returns null for empty values', () => {
    expect(getMetadataGatewayUrl('')).toBeNull()
  })
})

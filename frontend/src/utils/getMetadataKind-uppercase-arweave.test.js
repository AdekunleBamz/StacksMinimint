import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('normalizes uppercase arweave URI schemes', () => {
    expect(getMetadataKind('AR://abc123')).toBe('arweave')
  })
})

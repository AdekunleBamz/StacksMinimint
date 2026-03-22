import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

describe('getMetadataLabel', () => {
  it('returns IPFS metadata label for ipfs URIs', () => {
    expect(getMetadataLabel('ipfs://QmExample')).toBe('IPFS metadata')
  })
})

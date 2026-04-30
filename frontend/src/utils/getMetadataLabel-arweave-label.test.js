import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

describe('getMetadataLabel', () => {
  it('returns Arweave metadata label for ar:// URIs', () => {
    expect(getMetadataLabel('ar://abc123')).toBe('Arweave metadata')
  })
})

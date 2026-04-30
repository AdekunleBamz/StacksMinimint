import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('detects arweave scheme URIs', () => {
    expect(getMetadataKind('ar://abc123')).toBe('arweave')
  })
})

import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('marks ftp schemes as unknown', () => {
    expect(getMetadataKind('ftp://example.com/meta.json')).toBe('unknown')
  })
})

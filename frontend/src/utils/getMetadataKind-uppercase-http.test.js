import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('detects uppercase HTTP schemes', () => {
    expect(getMetadataKind('HTTP://example.com/meta.json')).toBe('http')
  })
})

import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('detects plain HTTP metadata links', () => {
    expect(getMetadataKind('http://example.com/meta.json')).toBe('http')
  })
})

import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('detects plain HTTPS metadata links', () => {
    expect(getMetadataKind('https://example.com/meta.json')).toBe('https')
  })
})

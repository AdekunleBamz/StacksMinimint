import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('normalizes uppercase HTTPS schemes', () => {
    expect(getMetadataKind('HTTPS://example.com')).toBe('https')
  })
})

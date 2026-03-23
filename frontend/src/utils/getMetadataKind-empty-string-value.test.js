import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('returns empty for blank string values', () => {
    expect(getMetadataKind('')).toBe('empty')
  })
})

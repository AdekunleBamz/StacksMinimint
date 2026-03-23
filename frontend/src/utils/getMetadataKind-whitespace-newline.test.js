import { describe, expect, it } from 'vitest'
import { getMetadataKind } from './collection'

describe('getMetadataKind', () => {
  it('treats newline-only values as empty metadata', () => {
    expect(getMetadataKind('\n\n')).toBe('empty')
  })
})

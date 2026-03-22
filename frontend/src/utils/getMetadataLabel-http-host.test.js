import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

describe('getMetadataLabel', () => {
  it('derives labels from standard HTTP hosts', () => {
    expect(getMetadataLabel('http://www.example.org/meta.json')).toBe('example.org')
  })
})

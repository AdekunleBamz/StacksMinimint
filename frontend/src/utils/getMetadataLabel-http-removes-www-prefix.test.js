import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

describe('getMetadataLabel', () => {
  it('removes www from HTTP host labels', () => {
    expect(getMetadataLabel('http://www.example.com/meta.json')).toBe('example.com')
  })
})

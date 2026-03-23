import { describe, expect, it } from 'vitest'
import { getMetadataLabel } from './collection'

describe('getMetadataLabel', () => {
  it('returns ip address hosts unchanged', () => {
    expect(getMetadataLabel('https://127.0.0.1/metadata.json')).toBe('127.0.0.1')
  })
})

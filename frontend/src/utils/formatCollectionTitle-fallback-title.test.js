import { describe, expect, it } from 'vitest'
import { formatCollectionTitle } from './format'

describe('formatCollectionTitle', () => {
  it('falls back to untitled collection when name is missing', () => {
    expect(formatCollectionTitle('')).toBe('Untitled Collection')
  })
})

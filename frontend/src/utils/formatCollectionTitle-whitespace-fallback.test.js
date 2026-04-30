import { describe, expect, it } from 'vitest'
import { formatCollectionTitle } from './format'

describe('formatCollectionTitle', () => {
  it('falls back when name is whitespace-only', () => {
    expect(formatCollectionTitle('   ')).toBe('Untitled Collection')
  })
})

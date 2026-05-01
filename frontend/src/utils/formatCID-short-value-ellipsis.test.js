import { describe, expect, it } from 'vitest'
import { formatCID } from './format'

describe('formatCID', () => {
  it('appends ellipsis even when cid is shorter than ten characters', () => {
    expect(formatCID('abc')).toBe('abc...')
  })
})

import { describe, expect, it } from 'vitest'
import { getLimitText } from './collection'

describe('getLimitText', () => {
  it('returns fallback label when value is null', () => {
    expect(getLimitText(null)).toBe('Not set')
  })
})

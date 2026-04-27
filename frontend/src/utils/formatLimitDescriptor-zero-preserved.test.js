import { describe, expect, it } from 'vitest'
import { getLimitText } from './collection'

describe('getLimitText', () => {
  it('preserves numeric zero instead of falling back', () => {
    expect(getLimitText(0)).toBe('0')
  })
})

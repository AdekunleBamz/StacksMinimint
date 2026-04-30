import { describe, expect, it } from 'vitest'
import { getLimitText } from './collection'

describe('getLimitText', () => {
  it('does not treat boolean false as a fallback value', () => {
    expect(getLimitText(false)).toBe('false')
  })
})

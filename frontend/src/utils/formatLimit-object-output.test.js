import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('stringifies object values for display', () => {
    expect(formatLimit({ cap: 2 })).toBe('[object Object]')
  })
})

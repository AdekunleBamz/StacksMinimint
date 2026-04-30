import { describe, expect, it } from 'vitest'
import { normalizeToastType } from './useToast'

describe('normalizeToastType', () => {
  it('falls back when toast type casing is unexpected', () => {
    expect(normalizeToastType('SUCCESS')).toBe('info')
  })
})

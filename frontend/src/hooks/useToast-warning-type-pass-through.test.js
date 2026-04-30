import { describe, expect, it } from 'vitest'
import { normalizeToastType } from './useToast'

describe('normalizeToastType', () => {
  it('preserves supported warning toast type', () => {
    expect(normalizeToastType('warning')).toBe('warning')
  })
})

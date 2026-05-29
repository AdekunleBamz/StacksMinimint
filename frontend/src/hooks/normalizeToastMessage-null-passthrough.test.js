import { describe, expect, it } from 'vitest'
import { normalizeToastMessage } from './useToast'

describe('normalizeToastMessage', () => {
  it('normalizes null values to an empty message', () => {
    expect(normalizeToastMessage(null)).toBe('')
  })
})

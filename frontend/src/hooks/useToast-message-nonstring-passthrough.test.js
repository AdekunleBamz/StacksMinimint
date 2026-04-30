import { describe, expect, it } from 'vitest'
import { normalizeToastMessage } from './useToast'

describe('normalizeToastMessage', () => {
  it('returns non-string values unchanged', () => {
    const payload = { text: 'Minted' }
    expect(normalizeToastMessage(payload)).toBe(payload)
  })
})

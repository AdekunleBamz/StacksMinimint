import { describe, expect, it } from 'vitest'
import { normalizeToastMessage } from './useToast'

describe('normalizeToastMessage', () => {
  it('stringifies non-string values for rendering', () => {
    const payload = { text: 'Minted' }
    expect(normalizeToastMessage(payload)).toBe('[object Object]')
  })
})

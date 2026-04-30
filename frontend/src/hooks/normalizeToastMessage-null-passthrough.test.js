import { describe, expect, it } from 'vitest'
import { normalizeToastMessage } from './useToast'

describe('normalizeToastMessage', () => {
  it('passes null values through unchanged', () => {
    expect(normalizeToastMessage(null)).toBeNull()
  })
})

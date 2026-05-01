import { describe, expect, it } from 'vitest'
import { normalizeToastDuration } from './useToast'

describe('normalizeToastDuration', () => {
  it('keeps zero duration as a valid persistent value', () => {
    expect(normalizeToastDuration(0)).toBe(0)
  })
})

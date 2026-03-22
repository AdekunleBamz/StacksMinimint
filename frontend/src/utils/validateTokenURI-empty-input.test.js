import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('returns metadata required state for empty input', () => {
    const result = validateTokenURI('')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Metadata required')
  })
})

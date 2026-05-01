import { describe, expect, it } from 'vitest'
import { isValidMetadataVersion } from './validators'

describe('isValidMetadataVersion', () => {
  it('accepts trimmed integer strings', () => {
    expect(isValidMetadataVersion(' 2 ')).toBe(true)
  })
})

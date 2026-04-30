import { describe, expect, it } from 'vitest'
import { isValidMetadataVersion } from './validators'

describe('isValidMetadataVersion', () => {
  it('accepts positive integer metadata versions above one', () => {
    expect(isValidMetadataVersion(42)).toBe(true)
  })
})

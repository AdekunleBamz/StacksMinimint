import { describe, expect, it } from 'vitest'
import { isValidProvenanceHash } from './validators'

describe('isValidProvenanceHash', () => {
  it('accepts hashes with surrounding whitespace after trimming', () => {
    expect(isValidProvenanceHash(`  ${'f'.repeat(64)}  `)).toBe(true)
  })
})

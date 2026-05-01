import { describe, expect, it } from 'vitest'
import { isValidProvenanceHash } from './validators'

describe('isValidProvenanceHash', () => {
  it('accepts trimmed valid hashes', () => {
    expect(isValidProvenanceHash(`  ${'a'.repeat(64)}  `)).toBe(true)
  })
})

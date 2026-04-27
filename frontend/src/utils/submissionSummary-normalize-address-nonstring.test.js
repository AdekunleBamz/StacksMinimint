import { describe, expect, it } from 'vitest'
import { normalizeSubmissionAddress } from './collection'

describe('normalizeSubmissionAddress', () => {
  it('keeps non-string address values unchanged', () => {
    expect(normalizeSubmissionAddress(null)).toBeNull()
  })
})

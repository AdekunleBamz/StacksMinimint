import { describe, expect, it } from 'vitest'
import { isValidBlockHeight } from './validators'

describe('isValidBlockHeight', () => {
  it('accepts trimmed integer strings', () => {
    expect(isValidBlockHeight(' 12 ')).toBe(true)
  })
})

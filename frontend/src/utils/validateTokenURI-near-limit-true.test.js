import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('marks near-limit state when URI length reaches ninety percent of max', () => {
    const longPath = 'a'.repeat(231)
    const result = validateTokenURI(`https://${longPath}`)

    expect(result.isNearLimit).toBe(true)
  })
})

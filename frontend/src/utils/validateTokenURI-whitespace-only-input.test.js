import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('treats whitespace-only input as missing metadata', () => {
    const result = validateTokenURI('   ')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Metadata required')
  })
})

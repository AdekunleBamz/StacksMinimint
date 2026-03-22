import { describe, expect, it } from 'vitest'
import { MAX_TOKEN_URI_LENGTH, validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('accepts URIs exactly at the configured max length', () => {
    const prefix = 'https://e.co/'
    const value = `${prefix}${'a'.repeat(MAX_TOKEN_URI_LENGTH - prefix.length)}`
    const result = validateTokenURI(value)

    expect(value.length).toBe(MAX_TOKEN_URI_LENGTH)
    expect(result.isValid).toBe(true)
  })
})

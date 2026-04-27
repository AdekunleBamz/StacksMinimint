import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('reports secureScheme for secure and insecure protocols', () => {
    const secureResult = validateTokenURI('https://example.com/meta.json')
    const insecureResult = validateTokenURI('http://example.com/meta.json')

    expect(secureResult.secureScheme).toBe(true)
    expect(insecureResult.secureScheme).toBe(false)
  })
})

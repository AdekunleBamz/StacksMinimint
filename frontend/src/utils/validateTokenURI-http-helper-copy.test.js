import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI http helper copy behavior coverage.
describe('validateTokenURI', () => {
  it('guides users to upgrade insecure HTTP metadata links', () => {
    const result = validateTokenURI('http://example.com/meta.json')
    expect(result.helper).toContain('https://')
  })
})

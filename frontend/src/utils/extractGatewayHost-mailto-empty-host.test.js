import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('returns an empty host for hostless URL schemes', () => {
    expect(extractGatewayHost('mailto:hello@example.com')).toBe('')
  })
})

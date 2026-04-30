import { describe, expect, it } from 'vitest'
import { extractGatewayHost } from './collection'

describe('extractGatewayHost', () => {
  it('extracts hostnames from URLs that include userinfo', () => {
    expect(extractGatewayHost('https://user:pass@assets.example.org/path')).toBe('assets.example.org')
  })
})

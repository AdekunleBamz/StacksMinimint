import { describe, it, expect } from 'vitest'
import { formatAddress, formatExactTime, formatLimit, formatRelativeTime, formatSTX, formatSTXCompact, getMetadataGatewayUrl, getMetadataKind, getMetadataLabel, validateTokenURI } from './collection'

// Regression note: preserve collection behavior coverage.
// Scope note: validates collection behavior for regressions.
describe('collection utility', () => {
  describe('formatSTX', () => {
    it('formats microstx values safely', () => {
      expect(formatSTX(0)).toBe('0')
      expect(formatSTX(1000000)).toBe('1')
      expect(formatSTX(2500000)).toBe('2.5')
    })

    it('returns zero for non-finite inputs', () => {
      expect(formatSTX(Number.POSITIVE_INFINITY)).toBe('0')
      expect(formatSTX(Number.NEGATIVE_INFINITY)).toBe('0')
    })
  })

  describe('formatSTXCompact', () => {
    it('formats regular STX compact amounts', () => {
      expect(formatSTXCompact(1500000)).toBe('1.50 STX')
    })

    it('formats thousand-scale compact STX amounts', () => {
      expect(formatSTXCompact(1500000000)).toBe('1.5K STX')
    })

    it('formats million-scale compact STX amounts', () => {
      expect(formatSTXCompact(1500000000000)).toBe('1.5M STX')
    })

    it('returns zero compact STX for invalid values', () => {
      expect(formatSTXCompact(Number.NaN)).toBe('0 STX')
    })
  })

  describe('formatAddress', () => {
    it('supports truncation without a suffix segment', () => {
      expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 4, 0)).toBe('SP5K...')
    })

    it('trims surrounding spaces before formatting addresses', () => {
      expect(formatAddress('  SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT  ', 4, 4)).toBe('SP5K...9TJT')
    })
  })

  describe('formatLimit', () => {
    it('formats numeric limits as strings', () => {
      expect(formatLimit(25)).toBe('25')
    })

    it('uses fallback labels for null limits', () => {
      expect(formatLimit(null, 'Unlimited')).toBe('Unlimited')
    })

    it('uses fallback labels for blank limits', () => {
      expect(formatLimit('   ')).toBe('Not set')
    })
  })

  describe('getMetadataKind', () => {
    it('detects known schemes', () => {
      expect(getMetadataKind('ipfs://abc')).toBe('ipfs')
      expect(getMetadataKind('https://example.com')).toBe('https')
      expect(getMetadataKind('http://example.com')).toBe('http')
      expect(getMetadataKind('')).toBe('empty')
    })

    it('treats whitespace-only metadata as empty', () => {
      expect(getMetadataKind('   ')).toBe('empty')
    })

    it('detects arweave metadata schemes', () => {
      expect(getMetadataKind('ar://abc')).toBe('arweave')
    })
  })

  describe('validateTokenURI', () => {
    it('accepts secure ipfs and https links', () => {
      expect(validateTokenURI('ipfs://cid').isValid).toBe(true)
      expect(validateTokenURI('https://example.com/meta.json').isValid).toBe(true)
    })

    it('accepts uppercase secure schemes', () => {
      expect(validateTokenURI('IPFS://cid').isValid).toBe(true)
      expect(validateTokenURI('HTTPS://example.com/meta.json').isValid).toBe(true)
    })

    it('rejects unsupported schemes', () => {
      const result = validateTokenURI('ftp://example.com')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Unsupported scheme')
    })

    it('asks users to upgrade http metadata URLs', () => {
      const result = validateTokenURI('http://example.com/meta.json')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Upgrade to HTTPS')
    })

    it('rejects malformed https metadata URLs', () => {
      const result = validateTokenURI('https://exa mple.com/meta.json')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Invalid metadata URL')
    })

    it('rejects ipfs URIs without a CID path', () => {
      const result = validateTokenURI('ipfs://')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Invalid IPFS URI')
    })

    it('rejects https metadata URLs with embedded credentials', () => {
      const result = validateTokenURI('https://user:pass@example.com/meta.json')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Remove URL credentials')
    })

    it('accepts arweave metadata URIs', () => {
      const result = validateTokenURI('ar://abc')
      expect(result.isValid).toBe(true)
      expect(result.label).toBe('Arweave metadata ready')
    })

    it('rejects metadata URIs above the contract limit', () => {
      const result = validateTokenURI(`ipfs://${'a'.repeat(260)}`)
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('URI too long')
    })

    it('rejects non-ASCII metadata URIs', () => {
      const result = validateTokenURI('ipfs://cid🔥')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Unsupported characters')
    })
  })

  describe('getMetadataGatewayUrl', () => {
    it('normalizes ipfs://ipfs paths to a single gateway prefix', () => {
      expect(getMetadataGatewayUrl('ipfs://ipfs/QmExample')).toBe('https://ipfs.io/ipfs/QmExample')
    })
  })

  describe('getMetadataLabel', () => {
    it('extracts host labels from padded web URLs', () => {
      expect(getMetadataLabel('  https://www.example.com/meta.json  ')).toBe('example.com')
    })

    it('labels arweave metadata clearly', () => {
      expect(getMetadataLabel('ar://abc')).toBe('Arweave metadata')
    })
  })

  describe('formatRelativeTime', () => {
    it('returns Just now for fresh timestamps', () => {
      expect(formatRelativeTime(Date.now())).toBe('Just now')
    })

    it('accepts Unix timestamps provided in seconds', () => {
      const oneMinuteAgoSeconds = Math.floor(Date.now() / 1000) - 60
      expect(formatRelativeTime(oneMinuteAgoSeconds)).toBe('1m ago')
    })
  })

  describe('formatExactTime', () => {
    it('formats to a readable string', () => {
      const formatted = formatExactTime(Date.now())
      expect(typeof formatted).toBe('string')
      expect(formatted.length).toBeGreaterThan(0)
    })

    it('accepts Unix timestamps provided in seconds', () => {
      const formatted = formatExactTime(Math.floor(Date.now() / 1000))
      expect(formatted).not.toBe('Unknown time')
    })

    it('formats second and millisecond timestamps equivalently', () => {
      const unixSeconds = 1710000000
      expect(formatExactTime(unixSeconds)).toBe(formatExactTime(unixSeconds * 1000))
    })
  })
})

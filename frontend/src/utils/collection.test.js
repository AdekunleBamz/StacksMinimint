import { describe, it, expect } from 'vitest'
import { createSubmissionRecord, formatAddress, formatExactTime, formatLimit, formatRelativeTime, formatSTX, formatSTXCompact, getCardAccent, getMetadataGatewayUrl, getMetadataKind, getMetadataLabel, isValidTokenId, validateTokenURI } from './collection'

// Regression note: preserve collection behavior coverage.
// Scope note: validates collection behavior for regressions.
describe('collection utility', () => {
  describe('formatSTX', () => {
    it('formats microstx values safely', () => {
      expect(formatSTX(0)).toBe('0')
      expect(formatSTX(1000000)).toBe('1')
      expect(formatSTX(2500000)).toBe('2.5')
    })

    it('trims numeric string microstx values', () => {
      expect(formatSTX(' 2500000 ')).toBe('2.5')
    })

    it('returns zero for non-finite inputs', () => {
      expect(formatSTX(Number.POSITIVE_INFINITY)).toBe('0')
      expect(formatSTX(Number.NEGATIVE_INFINITY)).toBe('0')
    })

    it('returns zero for nullish STX inputs', () => {
      expect(formatSTX(null)).toBe('0')
      expect(formatSTX(undefined)).toBe('0')
    })
  })

  describe('formatSTXCompact', () => {
    it('formats regular STX compact amounts', () => {
      expect(formatSTXCompact(1500000)).toBe('1.50 STX')
    })

    it('trims compact STX string inputs', () => {
      expect(formatSTXCompact(' 2500000 ')).toBe('2.50 STX')
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

    it('returns zero compact STX for nullish values', () => {
      expect(formatSTXCompact(null)).toBe('0 STX')
      expect(formatSTXCompact(undefined)).toBe('0 STX')
    })
  })

  describe('formatAddress', () => {
    it('supports truncation without a suffix segment', () => {
      expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 4, 0)).toBe('SP5K...')
    })

    it('trims surrounding spaces before formatting addresses', () => {
      expect(formatAddress('  SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT  ', 4, 4)).toBe('SP5K...9TJT')
    })

    it('leaves short addresses untruncated', () => {
      expect(formatAddress('SP123', 4, 4)).toBe('SP123')
    })

    it('returns an empty label for non-string addresses', () => {
      expect(formatAddress(12345)).toBe('')
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

    it('keeps zero limits visible', () => {
      expect(formatLimit(0)).toBe('0')
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

    it('marks unknown metadata schemes explicitly', () => {
      expect(getMetadataKind('ftp://example.com/meta.json')).toBe('unknown')
    })
  })

  describe('validateTokenURI', () => {
    it('reports required metadata for empty token URIs', () => {
      const result = validateTokenURI('')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Metadata required')
    })

    it('accepts secure ipfs and https links', () => {
      expect(validateTokenURI('ipfs://cid').isValid).toBe(true)
      expect(validateTokenURI('https://example.com/meta.json').isValid).toBe(true)
    })

    it('labels valid HTTPS metadata as ready', () => {
      const result = validateTokenURI('https://example.com/meta.json')
      expect(result.label).toBe('HTTPS metadata ready')
    })

    it('labels valid IPFS metadata as ready', () => {
      const result = validateTokenURI('ipfs://cid')
      expect(result.label).toBe('IPFS metadata ready')
    })

    it('accepts uppercase secure schemes', () => {
      expect(validateTokenURI('IPFS://cid').isValid).toBe(true)
      expect(validateTokenURI('HTTPS://example.com/meta.json').isValid).toBe(true)
    })

    it('rejects unsupported schemes', () => {
      const result = validateTokenURI('ftp://example.com')
      expect(result.isValid).toBe(false)
      expect(result.label).toBe('Unsupported scheme')
      expect(result.helper).toContain('ar://')
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

    it('marks valid arweave metadata with a success tone', () => {
      const result = validateTokenURI('ar://abc')
      expect(result.tone).toBe('success')
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

    it('counts characters after trimming token URIs', () => {
      const result = validateTokenURI('  ipfs://cid  ')
      expect(result.characterCount).toBe('ipfs://cid'.length)
    })
  })

  describe('getMetadataGatewayUrl', () => {
    it('normalizes ipfs://ipfs paths to a single gateway prefix', () => {
      expect(getMetadataGatewayUrl('ipfs://ipfs/QmExample')).toBe('https://ipfs.io/ipfs/QmExample')
    })

    it('returns null for blank IPFS gateway paths', () => {
      expect(getMetadataGatewayUrl('ipfs://   ')).toBeNull()
    })

    it('does not invent gateways for arweave metadata', () => {
      expect(getMetadataGatewayUrl('ar://abc')).toBeNull()
    })

    it('passes through trimmed HTTPS gateway URLs', () => {
      expect(getMetadataGatewayUrl('  https://example.com/meta.json  ')).toBe('https://example.com/meta.json')
    })
  })

  describe('getMetadataLabel', () => {
    it('extracts host labels from padded web URLs', () => {
      expect(getMetadataLabel('  https://www.example.com/meta.json  ')).toBe('example.com')
    })

    it('uses a web fallback label for malformed web URLs', () => {
      expect(getMetadataLabel('https://')).toBe('Web metadata')
    })

    it('labels IPFS metadata clearly', () => {
      expect(getMetadataLabel('ipfs://bafy')).toBe('IPFS metadata')
    })

    it('labels arweave metadata clearly', () => {
      expect(getMetadataLabel('ar://abc')).toBe('Arweave metadata')
    })
  })

  describe('createSubmissionRecord', () => {
    it('trims transaction ids before storing submissions', () => {
      const record = createSubmissionRecord({ txId: ' 0xabc ', tokenURI: 'ipfs://cid', address: 'SP123' })
      expect(record.txId).toBe('0xabc')
    })

    it('trims token URIs before storing submissions', () => {
      const record = createSubmissionRecord({ txId: '0xabc', tokenURI: ' ipfs://cid ', address: 'SP123' })
      expect(record.tokenURI).toBe('ipfs://cid')
    })

    it('trims addresses before storing submissions', () => {
      const record = createSubmissionRecord({ txId: '0xabc', tokenURI: 'ipfs://cid', address: ' SP123 ' })
      expect(record.address).toBe('SP123')
    })

    it('captures arweave metadata labels on submissions', () => {
      const record = createSubmissionRecord({ txId: '0xabc', tokenURI: 'ar://abc', address: 'SP123' })
      expect(record.metadataLabel).toBe('Arweave metadata')
    })

    it('creates a local id when tx id is missing', () => {
      const record = createSubmissionRecord({ tokenURI: 'ipfs://cid', address: 'SP123' })
      expect(record.id).toContain('local-')
    })

    it('uses unknown in local ids when address is blank', () => {
      const record = createSubmissionRecord({ tokenURI: 'ipfs://cid', address: '   ' })
      expect(record.id).toContain('unknown')
    })
  })

  describe('getCardAccent', () => {
    it('returns deterministic accent colors for the same seed', () => {
      expect(getCardAccent('seed-value')).toEqual(getCardAccent('seed-value'))
    })

    it('keeps generated accent hues within the color wheel', () => {
      const accent = getCardAccent('seed-value')
      expect(accent.hue).toBeGreaterThanOrEqual(0)
      expect(accent.hue).toBeLessThan(360)
    })

    it('includes the configured alpha in accent glows', () => {
      expect(getCardAccent('seed-value').glow).toContain('/ 0.25')
    })

    it('keeps secondary accent colors distinct from primary colors', () => {
      const accent = getCardAccent('seed-value')
      expect(accent.secondary).not.toBe(accent.primary)
    })
  })

  describe('isValidTokenId', () => {
    it('accepts token ids inside the default supply range', () => {
      expect(isValidTokenId(1)).toBe(true)
    })

    it('rejects token ids above custom supply caps', () => {
      expect(isValidTokenId(11, 10)).toBe(false)
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

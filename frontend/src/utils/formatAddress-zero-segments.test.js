import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

describe('formatAddress', () => {
  it('shows only ellipsis when both start and end lengths are zero', () => {
    expect(formatAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 0, 0)).toBe('...')
  })
})

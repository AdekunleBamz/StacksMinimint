import { describe, expect, it } from 'vitest'
import { normalizeHeaderAccount } from './Header'

describe('normalizeHeaderAccount', () => {
  it('trims surrounding spaces from wallet account values', () => {
    expect(normalizeHeaderAccount('  SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7  ')).toBe('SP2J6ZY48GV1EZ5V2V5RB9MP66SW86PYKKNRV9EJ7')
  })
})

import { describe, expect, it } from 'vitest'
import * as collection from './collection'

describe('maintenance utility coverage', () => {
  it('formats compact zero STX with fixed decimals', () => {
    expect(collection.formatSTXCompact(0)).toBe('0.00 STX')
  })
}

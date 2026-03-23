import { describe, expect, it } from 'vitest'
import { capitalize } from './strings'

describe('capitalize', () => {
  it('keeps leading non-letter symbols unchanged', () => {
    expect(capitalize('#stacks')).toBe('#stacks')
  })
})

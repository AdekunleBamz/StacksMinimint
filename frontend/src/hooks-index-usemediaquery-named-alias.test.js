import { describe, expect, it } from 'vitest';

import { useMediaQuery } from './hooks';
import { useMediaQuery as useMediaQueryFromModule } from './hooks/useMediaQuery';

describe('hooks index useMediaQuery named alias', () => {
  it('re-exports useMediaQuery from the media query hook module', () => {
    expect(useMediaQuery).toBe(useMediaQueryFromModule);
  });
});

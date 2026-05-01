import { describe, expect, it } from 'vitest';

import { useMediaQueryDefault } from './hooks';
import useMediaQueryDefaultExport from './hooks/useMediaQuery';

describe('hooks index media query default alias', () => {
  it('re-exports useMediaQueryDefault from useMediaQuery default export', () => {
    expect(useMediaQueryDefault).toBe(useMediaQueryDefaultExport);
  });
});

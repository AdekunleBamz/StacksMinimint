import { describe, expect, it } from 'vitest';

import { useIsTablet } from './hooks';
import { useIsTablet as useIsTabletFromModule } from './hooks/useMediaQuery';

describe('hooks index useIsTablet named alias', () => {
  it('re-exports useIsTablet from the media query hook module', () => {
    expect(useIsTablet).toBe(useIsTabletFromModule);
  });
});

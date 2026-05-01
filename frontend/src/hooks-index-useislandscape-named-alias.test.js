import { describe, expect, it } from 'vitest';

import { useIsLandscape } from './hooks';
import { useIsLandscape as useIsLandscapeFromModule } from './hooks/useMediaQuery';

describe('hooks index useIsLandscape named alias', () => {
  it('re-exports useIsLandscape from the media query hook module', () => {
    expect(useIsLandscape).toBe(useIsLandscapeFromModule);
  });
});

import { describe, expect, it } from 'vitest';

import { useHighContrast } from './hooks';
import { useHighContrast as useHighContrastFromModule } from './hooks/useMediaQuery';

describe('hooks index useHighContrast named alias', () => {
  it('re-exports useHighContrast from the media query hook module', () => {
    expect(useHighContrast).toBe(useHighContrastFromModule);
  });
});

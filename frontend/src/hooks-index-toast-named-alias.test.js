import { describe, expect, it } from 'vitest';

import { useToast } from './hooks';
import { useToast as useToastFromModule } from './hooks/useToast';

describe('hooks index toast named alias', () => {
  it('re-exports useToast from the toast hook module', () => {
    expect(useToast).toBe(useToastFromModule);
  });
});

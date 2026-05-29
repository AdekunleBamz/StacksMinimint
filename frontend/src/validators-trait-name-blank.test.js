import { describe, expect, it } from 'vitest';
import { isValidTraitName } from './utils/validators.js';

describe('isValidTraitName blank input', () => {
  it('rejects blank trait names', () => {
    expect(isValidTraitName('   ')).toBe(false);
  });
});

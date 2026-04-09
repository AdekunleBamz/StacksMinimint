import { describe, expect, it } from 'vitest';

import { CONTRACT_NAME } from './index.js';

describe('frontend core contract default', () => {
  it('targets the tracked core contract version', () => {
    expect(CONTRACT_NAME).toBe('minimint-core-v-i27');
  });
});

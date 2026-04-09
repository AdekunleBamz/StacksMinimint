import { describe, expect, it } from 'vitest';

import { CONTRACT_NAME, HUB_CONTRACT_NAME } from './index.js';

describe('frontend core contract default', () => {
  it('targets the tracked core contract version', () => {
    expect(CONTRACT_NAME).toBe('minimint-core-v-i27');
  });

  it('targets the tracked hub contract version', () => {
    expect(HUB_CONTRACT_NAME).toBe('minimint-hub-v-i27');
  });
});

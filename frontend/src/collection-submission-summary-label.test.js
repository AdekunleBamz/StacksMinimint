import { describe, expect, it } from 'vitest';
import { createSubmissionRecord, createSubmissionSummary } from './utils/collection.js';

describe('createSubmissionSummary label', () => {
  it('includes the normalized address', () => {
    const record = createSubmissionRecord({ txId: 'tx', tokenURI: 'ipfs://abc', address: 'SP1' });
    expect(createSubmissionSummary(record).address).toBe('SP1');
  });
});

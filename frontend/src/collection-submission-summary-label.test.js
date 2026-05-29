import { describe, expect, it } from 'vitest';
import { createSubmissionRecord, createSubmissionSummary } from './utils/collection.js';

describe('createSubmissionSummary label', () => {
  it('keeps the submission id from the record', () => {
    const record = createSubmissionRecord({ txId: 'tx', tokenURI: 'ipfs://abc', address: 'SP1' });
    expect(createSubmissionSummary(record).id).toBe('tx');
  });
});

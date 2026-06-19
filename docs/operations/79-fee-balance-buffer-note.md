# Fee balance buffer note

Keep a fee balance buffer for mint smoke wallets so test runs are not blocked by transaction-fee shortages.

## Checklist

- Check STX balance before scheduled mint smoke runs.
- Refill wallets when the balance falls below the agreed fee buffer.

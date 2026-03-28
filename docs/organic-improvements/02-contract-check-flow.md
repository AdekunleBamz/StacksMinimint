# Contract Check Flow

1. Run `npm run contracts:check` before local tests.
2. If checks fail, open `Clarinet.toml` and contract imports first.
3. Re-run checks after every contract rename or trait change.
4. Keep failing output in PR notes for faster review.

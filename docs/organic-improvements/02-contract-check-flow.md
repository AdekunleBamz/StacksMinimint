# Contract Check Flow

1. Run `npm run contracts:check` before local tests.
2. Use `npm run check` when you want the full root validation pass.
3. If checks fail, open `Clarinet.toml` and contract imports first.
4. Re-run checks after every contract rename or trait change.
5. Keep failing output in PR notes for faster review.

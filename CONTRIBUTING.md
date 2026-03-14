# Contributing

Thanks for helping improve NFTminimint.

## Workflow

1. Create a branch from `main`.
2. Make focused changes with clear commit messages.
3. Run relevant checks before opening a pull request.
4. Include context about what changed and why.

## Useful Commands

```bash
npm run frontend:install
npm run frontend:dev
npm run frontend:check
clarinet check
```

## Commit Guidelines

- Prefer small commits with one primary intent.
- Use prefixes like `feat`, `fix`, `refactor`, `docs`, or `chore`.
- Keep messages concrete enough to explain user impact.

## Testing Expectations

- Run `npm run frontend:check` for UI-impacting changes.
- Run `clarinet check` for contract-impacting changes.
- Mention any checks you could not run in your pull request description.

## Accessibility Checklist

- Verify keyboard navigation still works for interactive controls.
- Use semantic roles/labels for dialogs, alerts, and live status text.
- Respect `prefers-reduced-motion` when adding or changing animation.

## Pull Request Checklist

- Describe the user-visible behavior change.
- List commands/checks run locally and their outcome.
- Include screenshots or recordings for meaningful UI updates.

## Contract Change Notes

- Document any storage schema changes in the pull request body.
- Call out post-condition or permission changes explicitly.
- Prefer additive migrations over breaking state rewrites when possible.

## Frontend Change Notes

- Ensure loading, empty, and error states remain clear after UI updates.
- Confirm external links use safe `rel=\"noopener noreferrer\"` settings.
- Verify changes still work on mobile breakpoints.

## Issue Reporting

- Include exact steps to reproduce the problem.
- Share expected behavior vs. actual behavior.
- Attach screenshots, logs, or transaction IDs when relevant.

## Branch Naming

- Use clear branch prefixes such as `feat/`, `fix/`, `docs/`, or `chore/`.
- Keep names short but descriptive, for example `fix/mint-status-fallback`.

## Release Notes Hygiene

- Highlight breaking changes in pull request summaries.
- Note user-facing behavior changes in plain language.
- Include migration steps when config or workflow changes are introduced.

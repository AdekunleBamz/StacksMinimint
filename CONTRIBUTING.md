# Contributing to StacksMinimint

Thank you for your interest in contributing to StacksMinimint! This document explains how to get started and the conventions we follow.

---

## Getting Started

1. Fork the repository, clone your fork, and add the upstream remote.
2. Install root-level dependencies: `npm ci`
3. Install frontend dependencies: `npm run frontend:install`
4. Copy the environment file: `cp frontend/.env.example frontend/.env`
5. Start the development server from the repo root: `npm run frontend:dev`

---

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Each commit message should follow the form:

```
<type>(<scope>): <short summary>
```

### Types

| Type       | When to use                                      |
|------------|--------------------------------------------------|
| `feat`     | New feature or capability                        |
| `fix`      | Bug fix                                          |
| `chore`    | Maintenance, dependency updates, config changes  |
| `docs`     | Documentation only changes                      |
| `refactor` | Code restructuring without behavior change       |
| `test`     | Adding or improving tests                        |
| `perf`     | Performance improvements                         |
| `style`    | Formatting, whitespace (no logic changes)        |

### Scopes (examples)

`constants`, `utils`, `hooks`, `context`, `contract`, `contracts`, `frontend`, `tests`, `docs`

---

## Development Workflow

- Run Clarinet checks before submitting contract changes: `clarinet check`
- Run frontend tests: `npm run frontend:test`
- Run the fast root validation before opening a PR: `npm run check:fast`
- Keep commits small and focused, with one logical change per commit.
- Open a pull request against `main` with a clear description.

---

## Code Style

- JavaScript: follow the existing module and naming patterns used in `frontend/src`.
- Clarity: adhere to the coding patterns in `contracts/`.
- Prefer named exports over default exports in utility modules.
- Guard function arguments defensively at module boundaries.

---

## Security

Please do **not** open public issues for security vulnerabilities. Review [SECURITY.md](./SECURITY.md) for the responsible disclosure process.

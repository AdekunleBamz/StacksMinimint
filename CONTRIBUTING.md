# Contributing to StacksMinimint

Thanks for helping improve the StacksMinimint experience. We appreciate your time and expertise!

---

## 🚀 Workflow

1. **Branch**: Create a descriptive branch from `main`.
2. **Focus**: Make atomic changes with clear commit messages.
3. **Verify**: Run relevant checks before opening a pull request.
4. **Context**: Include details about *what* changed and *why*.

## 🛠 Useful Commands

```bash
# Setup
npm run frontend:install

# Development
npm run frontend:dev

# Verification
npm run frontend:check
clarinet check
```

## 📝 Commit Guidelines

> [!TIP]
> Use prefixes like `feat`, `fix`, `refactor`, `docs`, or `chore`.

- Prefer small commits with one primary intent.
- Keep messages concrete enough to explain user impact.
- Use the imperative mood (e.g., "Add feature" not "Added feature").

---

## ✅ Quality Standards

### Testing Expectations
- Run `npm run frontend:check` for UI-impacting changes.
- Run `clarinet check` for contract-impacting changes.
- **Note**: Mention any checks you could not run in your PR description.

### Accessibility Checklist
- [ ] Verify keyboard navigation for interactive controls.
- [ ] Use semantic roles/labels for dialogs and status text.
- [ ] Respect `prefers-reduced-motion` settings.

### Frontend Change Notes
- Ensure loading, empty, and error states remain clear.
- Confirm external links use `rel="noopener noreferrer"`.
- **Verify changes on mobile breakpoints.**

---

## 📮 Pull Requests & Issues

### Pull Request Checklist
- [ ] Describe the user-visible behavior change.
- [ ] List commands/checks run locally.
- [ ] Include screenshots or recordings for UI updates.

### Issue Reporting
- Include exact steps to reproduce.
- Share expected vs. actual behavior.
- Attach screenshots, logs, or transaction IDs.

> [!IMPORTANT]
> Always update relevant README/docs whenever behavior or setup changes.

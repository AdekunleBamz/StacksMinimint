/**
 * Commitlint Configuration for StacksMinimint
 * 
 * This configuration enforces conventional commit standards across the project.
 * All commits must follow the format: type(scope): description
 * 
 * Types:
 * - feat: A new feature
 * - fix: A bug fix
 * - docs: Documentation changes
 * - style: Code style changes (formatting, semicolons, etc.)
 * - refactor: Code refactoring without feature change
 * - perf: Performance improvements
 * - test: Adding or updating tests
 * - chore: Maintenance tasks, build config, etc.
 * - revert: Reverting a previous commit
 * - ci: CI/CD configuration changes
 * - build: Build system or dependency changes
 * 
 * Rules:
 * - Subject must be lowercase
 * - Header max length: 72 characters
 * - Type must be one of the allowed values
 * 
 * @see https://www.conventionalcommits.org/
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'ci',
        'build'
      ]
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 72]
  }
};
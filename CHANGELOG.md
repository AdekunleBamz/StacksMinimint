# Changelog

All notable changes to StacksMinimint will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `TRANSACTION_TIMEOUT_MS` constant for wallet confirmation timeout budgets
- `MAX_RETRIES` constant for network request retry configuration
- `ANIMATION_DURATION_MS` constant for consistent UI transition durations
- `MIN_MINT_FEE` constant documenting the minimum accepted custom mint fee
- `CLIPBOARD_TIMEOUT_MS` constant replacing magic numbers in clipboard handling
- `isBlank` string utility to test for null/undefined/whitespace-only values
- `slugify` string utility for converting display text to URL-friendly slugs
- `pluralize` string utility for count-based singular/plural word selection
- `truncateMiddle` re-exported from the utils barrel for consistent imports
- `getCardAccent` now includes a `hue` field in its return value
- `getContractExplorerUrl` function in `contract.js` for linking to the deployed contract
- `isActive` getter on the `createFocusTrap` returned object for introspection
- `useHighContrast` preset hook for `(forced-colors: active)` media query
- `executionCount` and `lastExecutedAt` fields in `useAsync` state
- `hasRun` boolean derived value in `useAsync` return value
- `clearAll` method in `useToast` to dismiss all notifications at once
- `hasValue` field in `useLocalStorage` destructuring object
- `isSignedIn` alias in `useStacksWallet` return alongside `isConnected`
- `displayAddress` field in `useStacksWallet` return with pre-truncated address
- `isSoldOut` boolean and `remainingSupply` integer in `useStacksContract` return
- `isConfirmed` and `isPending` computed booleans in `useTransactionStatus` return
- `isDark` and `isLight` boolean fields exposed by `ThemeProvider` context value

### Fixed
- `useClipboard`: `copy` callback now correctly lists `safeTimeout` in its dependency array
- `useTransaction`: polling interval comment corrected from "10 seconds" to "8 seconds"
- `validateTokenURI`: Arweave (`ar://`) URIs are now treated as a secure scheme
- `focusTrap` JSDoc: corrected `initialFocus` param type from `boolean` to `string|HTMLElement`
- `formatRelativeTime`: timestamps older than 30 days now display as months (e.g. `2mo ago`)

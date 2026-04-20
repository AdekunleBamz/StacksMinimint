;; Note: Minimint Hub V I27 contract
;; Scope: minimal reference note.

;; StacksMinimint - Ecosystem Hub
;; --------------------------------------------------------
;; This contract acts as a unified escrow for NFT staking and 
;; marketplace listings. It manages reward distribution via 
;; the minimint-token and interacts natively with minimint-core.

;; @title StacksMinimint Hub
;; @version 1.0.0
;; @notice Manages staking, marketplace, and reward logic.

;; Keep this path pinned to the local v-i27 SIP trait contract for Clarinet compatibility.
(use-trait nft-trait .sip-009-nft-trait-v-i27.sip-009-nft-trait)

;; --- Error Codes ---
;; Standardized error codes for marketplace and staking operations.

;; ERR-NOT-AUTHORIZED (u100): Caller lacks permission for the requested action.
;; Used when contract-caller is not the expected user in staking functions.
(define-constant ERR-NOT-AUTHORIZED (err u100))

;; ERR-NOT-OWNER (u101): Caller is not the owner of the specified NFT.
;; Used in listing and unstaking to enforce ownership checks.
(define-constant ERR-NOT-OWNER (err u101))

;; ERR-NOT-STAKED (u102): No staking record found for the specified token or user.
;; Returned when trying to unstake or claim rewards without an active stake.
(define-constant ERR-NOT-STAKED (err u102))

;; ERR-LISTING-NOT-FOUND (u103): No marketplace listing exists for the token.
;; Returned when trying to buy or unlist a token that isn't listed.
(define-constant ERR-LISTING-NOT-FOUND (err u103))

;; ERR-WRONG-MAKER (u104): Caller is not the creator of the listing.
;; Used to prevent unauthorized users from unlisting another user's NFT.
(define-constant ERR-WRONG-MAKER (err u104))

;; ERR-INVALID-PRICE (u105): The specified price is invalid (zero or negative).
;; Returned when trying to list an NFT with a price <= 0.
(define-constant ERR-INVALID-PRICE (err u105))

;; ERR-WRONG-CONTRACT (u106): NFT is not from the expected core contract.
;; Security check to ensure only official collection NFTs can be used.
(define-constant ERR-WRONG-CONTRACT (err u106))

;; --- Constants ---
;; Immutable configuration values for the hub contract.

;; REWARD-PER-BLOCK: Reward tokens minted per block per staked NFT.
;; u1000000 = 1.0 MMT tokens (assuming 6 decimal places).
;; Formula: rewards = staked_balance * blocks_passed * REWARD-PER-BLOCK
;; Adjust this constant only through a contract upgrade, not at runtime.
(define-constant REWARD-PER-BLOCK u1000000)

;; contract-owner: Tracks the administrative owner of this contract.
;; Initialized to tx-sender on first deployment.
(define-data-var contract-owner principal tx-sender)

;; CORE-CONTRACT: Reference to the official minimint-core contract.
;; Used to validate that NFTs being staked/listed are from the correct collection.
;; This is a security measure to prevent unauthorized NFTs from being used.
(define-constant CORE-CONTRACT .minimint-core-v-i27)

;; --- Staking Data ---
;; stakers: Maps token IDs to the address that staked them.
;; Used to verify ownership when unstaking.
(define-map stakers uint principal)

;; staking-info: Tracks each user's staking balance and last reward calculation.
;; Balance increases with each stake, decreases with each unstake.
;; last-reward-block is updated on each reward calculation to prevent double-counting.
(define-map staking-info principal { staked-balance: uint, last-reward-block: uint })

;; --- Marketplace Data ---
;; listings: Maps token IDs to listing details (maker and price).
;; The key is a tuple to allow for future extensions (e.g., multiple marketplaces).
(define-map listings { token-id: uint } { maker: principal, price: uint })

;; ------------------------------------------
;; Marketplace Functions
;; ------------------------------------------

;; List an NFT for sale on the marketplace
;; Arguments:
;;   nft: The NFT trait reference for the collection
;;   token-id: The NFT token ID to list
;;   price: The asking price in STX (must be > 0)
;; Returns: (ok true) on success, or an error if:
;;   - Caller doesn't own the token (ERR-NOT-OWNER)
;;   - NFT is not from the correct core contract (ERR-WRONG-CONTRACT)
;;   - Price is zero or invalid (ERR-INVALID-PRICE)
;; Emits: listed event with token-id, maker, and price
(define-public (list-item (nft <nft-trait>) (token-id uint) (price uint))
  (let 
    (
      (owner (unwrap! (contract-call? nft get-owner token-id) ERR-NOT-OWNER))
    )
    (asserts! (is-eq (contract-of nft) CORE-CONTRACT) ERR-WRONG-CONTRACT)
    (asserts! (is-eq (some tx-sender) owner) ERR-NOT-OWNER)
    (asserts! (> price u0) ERR-INVALID-PRICE)
    
    ;; Transfer NFT to this Hub contract (escrow)
    (try! (contract-call? nft transfer token-id tx-sender (as-contract tx-sender)))
    
    (map-set listings { token-id: token-id } { maker: tx-sender, price: price })
    (print { event: "listed", token-id: token-id, maker: tx-sender, price: price })
    (ok true)
  )
)

;; Remove an NFT from the marketplace (seller only)
;; Arguments:
;;   nft: The NFT trait reference for the collection
;;   token-id: The NFT token ID to unlist
;; Returns: (ok true) on success, or an error if:
;;   - Listing not found (ERR-LISTING-NOT-FOUND)
;;   - Caller is not the listing creator (ERR-WRONG-MAKER)
;;   - NFT is not from the correct core contract (ERR-WRONG-CONTRACT)
;; Emits: unlisted event with token-id and maker
(define-public (unlist-item (nft <nft-trait>) (token-id uint))
  (let 
    (
      (listing (unwrap! (map-get? listings { token-id: token-id }) ERR-LISTING-NOT-FOUND))
      (maker (get maker listing))
    )
    (asserts! (is-eq (contract-of nft) CORE-CONTRACT) ERR-WRONG-CONTRACT)
    (asserts! (is-eq tx-sender maker) ERR-WRONG-MAKER)
    
    ;; Transfer NFT back - Hub is trusted caller in core so it can move it without as-contract
    (try! (contract-call? nft transfer token-id (as-contract tx-sender) maker))
    
    (map-delete listings { token-id: token-id })
    (print { event: "unlisted", token-id: token-id, maker: tx-sender })
    (ok true)
  )
)

;; Purchase an NFT from the marketplace
;; Arguments:
;;   nft: The NFT trait reference for the collection
;;   token-id: The NFT token ID to buy
;; Returns: (ok true) on success, or an error if:
;;   - Listing not found (ERR-LISTING-NOT-FOUND)
;;   - Buyer is the seller (ERR-NOT-AUTHORIZED)
;;   - NFT is not from the correct core contract (ERR-WRONG-CONTRACT)
;;   - Insufficient STX balance for purchase
;; Emits: sold event with token-id, maker, buyer, and price
(define-public (buy-item (nft <nft-trait>) (token-id uint))
  (let 
    (
      (listing (unwrap! (map-get? listings { token-id: token-id }) ERR-LISTING-NOT-FOUND))
      (price (get price listing))
      (maker (get maker listing))
      (buyer tx-sender)
    )
    (asserts! (is-eq (contract-of nft) CORE-CONTRACT) ERR-WRONG-CONTRACT)
    (asserts! (not (is-eq buyer maker)) ERR-NOT-AUTHORIZED)
    
    ;; Transfer STX from buyer to maker
    (try! (stx-transfer? price buyer maker))
    
    ;; Transfer NFT from Hub to buyer
    (try! (contract-call? nft transfer token-id (as-contract tx-sender) buyer))
    
    (map-delete listings { token-id: token-id })
    (print { event: "sold", token-id: token-id, maker: maker, buyer: buyer, price: price })
    (ok true)
  )
)

;; Get marketplace listing details for a token
;; Arguments:
;;   token-id: The NFT token ID to look up
;; Returns: (ok (optional { maker: principal, price: uint })) - Listing info if exists
(define-read-only (get-listing (token-id uint))
  (ok (map-get? listings { token-id: token-id }))
)

;; ------------------------------------------
;; Staking Functions
;; ------------------------------------------

;; Stake an NFT to earn reward tokens
;; Arguments:
;;   nft-contract: The NFT trait reference for the collection
;;   token-id: The NFT token ID to stake
;; Returns: (ok true) on success, or panics if:
;;   - Contract caller is not the user (ERR-NOT-AUTHORIZED)
;;   - NFT is not from the correct core contract (ERR-WRONG-CONTRACT)
;; Note: Automatically claims pending rewards before staking
;; Updates: Increases staked-balance and resets last-reward-block
(define-public (stake (nft-contract <nft-trait>) (token-id uint))
  (let
    (
      (caller tx-sender)
      (current-info (default-to { staked-balance: u0, last-reward-block: burn-block-height } (map-get? staking-info caller)))
      (pending-rewards (calculate-rewards caller))
    )
    (asserts! (is-eq contract-caller caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq (contract-of nft-contract) CORE-CONTRACT) ERR-WRONG-CONTRACT)

    ;; Transfer NFT to this contract
    (unwrap-panic (contract-call? nft-contract transfer token-id caller (as-contract tx-sender)))

    ;; Mint pending rewards natively targeting minimint-token
    (if (> pending-rewards u0)
        (unwrap-panic (contract-call? .minimint-token-v-i27 mint pending-rewards caller))
        true
    )

    (map-set stakers token-id caller)
    (map-set staking-info caller {
      staked-balance: (+ (get staked-balance current-info) u1),
      last-reward-block: burn-block-height
    })
    (ok true)
  )
)

;; Unstake an NFT and receive it back
;; Arguments:
;;   nft-contract: The NFT trait reference for the collection
;;   token-id: The NFT token ID to unstake
;; Returns: (ok true) on success, or an error if:
;;   - Token is not staked (ERR-NOT-STAKED)
;;   - Caller is not the staker (ERR-NOT-OWNER)
;;   - NFT is not from the correct core contract (ERR-WRONG-CONTRACT)
;; Note: Automatically claims pending rewards before unstaking
;; Updates: Decreases staked-balance and resets last-reward-block
(define-public (unstake (nft-contract <nft-trait>) (token-id uint))
  (let
    (
      (caller tx-sender)
      (staker (unwrap! (map-get? stakers token-id) ERR-NOT-STAKED))
      (current-info (unwrap! (map-get? staking-info caller) ERR-NOT-STAKED))
      (pending-rewards (calculate-rewards caller))
    )
    (asserts! (is-eq staker caller) ERR-NOT-OWNER)
    (asserts! (is-eq (contract-of nft-contract) CORE-CONTRACT) ERR-WRONG-CONTRACT)

    ;; Mint pending rewards
    (if (> pending-rewards u0)
        (unwrap-panic (contract-call? .minimint-token-v-i27 mint pending-rewards caller))
        true
    )

    ;; Transfer NFT back
    (unwrap-panic (contract-call? nft-contract transfer token-id (as-contract tx-sender) caller))

    (map-delete stakers token-id)
    (map-set staking-info caller {
      staked-balance: (- (get staked-balance current-info) u1),
      last-reward-block: burn-block-height
    })
    (ok true)
  )
)

;; Claim accumulated staking rewards
;; Returns: (ok pending-rewards) on success, or an error if:
;;   - User has no staked NFTs (ERR-NOT-STAKED)
;;   - No rewards available to claim
;; Note: Updates last-reward-block to current block height
(define-public (claim-rewards)
  (let
    (
      (caller tx-sender)
      (current-info (unwrap! (map-get? staking-info caller) ERR-NOT-STAKED))
      (pending-rewards (calculate-rewards caller))
    )
    (asserts! (> pending-rewards u0) (ok pending-rewards))

    (unwrap-panic (contract-call? .minimint-token-v-i27 mint pending-rewards caller))

    (map-set staking-info caller {
      staked-balance: (get staked-balance current-info),
      last-reward-block: burn-block-height
    })
    (ok pending-rewards)
  )
)

;; Get the staker address for a specific token
;; Arguments:
;;   token-id: The NFT token ID to look up
;; Returns: (ok (optional principal)) - The staker's address if staked
(define-read-only (get-staker (token-id uint))
  (ok (map-get? stakers token-id))
)

;; Get staking information for a user
;; Arguments:
;;   user: The address to look up
;; Returns: (ok { staked-balance: uint, last-reward-block: uint }) - Staking info
(define-read-only (get-staking-info (user principal))
  (ok (map-get? staking-info user))
)

;; Calculate pending rewards for a user
;; Arguments:
;;   user: The address to calculate rewards for
;; Returns: uint - The amount of reward tokens pending
;; Formula: staked-balance * blocks-passed * REWARD-PER-BLOCK
(define-read-only (calculate-rewards (user principal))
  (let
    (
      (current-info (default-to { staked-balance: u0, last-reward-block: burn-block-height } (map-get? staking-info user)))
      (blocks-passed (- burn-block-height (get last-reward-block current-info)))
      (balance (get staked-balance current-info))
    )
    (* (* balance blocks-passed) REWARD-PER-BLOCK)
  )
)

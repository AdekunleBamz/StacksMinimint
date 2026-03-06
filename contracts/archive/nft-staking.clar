;; nft-staking-v-i3
;; Staking contract for minimint NFTs
;; Users stake their NFTs to earn minimint-token (MMT) rewards

(use-trait nft-trait .sip-009-nft-trait.sip-009-nft-trait)

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-NOT-OWNER (err u101))
(define-constant ERR-NOT-STAKED (err u102))

;; 1 token per block rate (with 6 decimals, that's 1,000,000 uMMT)
(define-constant REWARD-PER-BLOCK u1000000)

(define-data-var contract-owner principal tx-sender)

;; Map to track staked NFTs: token-id -> staker
(define-map stakers uint principal)

;; Map to track staking metrics per user:
;; - staked-balance: how many NFTs the user has staked
;; - last-reward-block: the block height they last claimed/staked
(define-map staking-info principal { staked-balance: uint, last-reward-block: uint })

;; ------------------------------------------
;; Public Functions
;; ------------------------------------------

(define-constant SELF 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.nft-staking-v-i18)

(define-public (stake (nft-contract <nft-trait>) (token-id uint))
  (let
    (
      (caller tx-sender)
      (current-info (default-to { staked-balance: u0, last-reward-block: burn-block-height } (map-get? staking-info caller)))
      (pending-rewards (calculate-rewards caller))
    )
    (asserts! (is-eq contract-caller caller) ERR-NOT-AUTHORIZED)
    (asserts! (is-eq (contract-of nft-contract) .nft-core) ERR-NOT-AUTHORIZED)

    ;; Transfer NFT to this contract using hardcoded SELF
    (unwrap-panic (contract-call? nft-contract transfer token-id caller SELF))

    ;; Mint any pending rewards (Note: staking contract IS the caller here, no as-contract needed)
    (if (> pending-rewards u0)
        (unwrap-panic (contract-call? .minimint-token mint pending-rewards caller))
        true
    )

    ;; Update maps
    (map-set stakers token-id caller)
    (map-set staking-info caller {
      staked-balance: (+ (get staked-balance current-info) u1),
      last-reward-block: burn-block-height
    })

    (ok true)
  )
)

(define-public (unstake (nft-contract <nft-trait>) (token-id uint))
  (let
    (
      (caller tx-sender)
      (staker (unwrap! (map-get? stakers token-id) ERR-NOT-STAKED))
      (current-info (unwrap! (map-get? staking-info caller) ERR-NOT-STAKED))
      (pending-rewards (calculate-rewards caller))
    )
    (asserts! (is-eq staker caller) ERR-NOT-OWNER)
    (asserts! (is-eq (contract-of nft-contract) .nft-core) ERR-NOT-AUTHORIZED)

    ;; Mint pending rewards
    (if (> pending-rewards u0)
        (unwrap-panic (contract-call? .minimint-token mint pending-rewards caller))
        true
    )

    ;; Transfer NFT back to caller using hardcoded SELF which is natively allowed by nft-core-v-i4
    (unwrap-panic (contract-call? nft-contract transfer token-id SELF caller))

    ;; Update state
    (map-delete stakers token-id)
    (map-set staking-info caller {
      staked-balance: (- (get staked-balance current-info) u1),
      last-reward-block: burn-block-height
    })

    (ok true)
  )
)

(define-public (claim-rewards)
  (let
    (
      (caller tx-sender)
      (current-info (unwrap! (map-get? staking-info caller) ERR-NOT-STAKED))
      (pending-rewards (calculate-rewards caller))
    )
    (asserts! (> pending-rewards u0) (ok pending-rewards))

    ;; Mint rewards
    (unwrap-panic (contract-call? .minimint-token mint pending-rewards caller))

    ;; Update checkpoint
    (map-set staking-info caller {
      staked-balance: (get staked-balance current-info),
      last-reward-block: burn-block-height
    })

    (ok pending-rewards)
  )
)

;; ------------------------------------------
;; Read-Only Functions
;; ------------------------------------------

(define-read-only (get-staker (token-id uint))
  (ok (map-get? stakers token-id))
)

(define-read-only (get-staking-info (user principal))
  (ok (map-get? staking-info user))
)

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

;; Admin functions
(define-public (transfer-ownership (new-owner principal))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (var-set contract-owner new-owner)
    (ok true)
  )
)

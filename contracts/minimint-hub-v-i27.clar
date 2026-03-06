;; minimint-hub
;; Unified escrow contract for Staking and Marketplace
;; Interacts natively with minimint-core and minimint-token

(use-trait nft-trait .sip-009-nft-trait-v2-2.nft-trait)

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-NOT-OWNER (err u101))
(define-constant ERR-NOT-STAKED (err u102))
(define-constant ERR-LISTING-NOT-FOUND (err u103))
(define-constant ERR-WRONG-MAKER (err u104))
(define-constant ERR-INVALID-PRICE (err u105))
(define-constant ERR-WRONG-CONTRACT (err u106))

(define-constant REWARD-PER-BLOCK u1000000) ;; 1 MMT per block (u6 decimals)
(define-data-var contract-owner principal tx-sender)

;; Make sure we are interacting with the correct minimint-core contract
(define-constant CORE-CONTRACT .minimint-core-v-i27)

;; --- Staking Data ---
(define-map stakers uint principal)
(define-map staking-info principal { staked-balance: uint, last-reward-block: uint })

;; --- Marketplace Data ---
(define-map listings { token-id: uint } { maker: principal, price: uint })

;; ------------------------------------------
;; Marketplace Functions
;; ------------------------------------------

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

(define-read-only (get-listing (token-id uint))
  (ok (map-get? listings { token-id: token-id }))
)

;; ------------------------------------------
;; Staking Functions
;; ------------------------------------------

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

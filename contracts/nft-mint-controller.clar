;; NFT Mint Controller
;; Handles minting logic and fees

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-INSUFFICIENT-FUNDS (err u101))
(define-constant ERR-SOLD-OUT (err u102))
(define-constant ERR-INVALID-FEE (err u103))

(define-constant MINT-FEE u1000) ;; 0.001 STX (1000 micro-STX)
(define-constant MAX-SUPPLY u10000)

(define-data-var contract-owner principal tx-sender)
(define-data-var mint-fee uint MINT-FEE)

;; Read-only functions
(define-read-only (get-mint-fee)
  (ok (var-get mint-fee))
)

(define-read-only (get-max-supply)
  (ok MAX-SUPPLY)
)

(define-read-only (get-current-supply)
  (ok (unwrap-panic (contract-call? .nft-core get-last-token-id)))
)

(define-read-only (get-remaining-supply)
  (let
    (
      (current (unwrap-panic (contract-call? .nft-core get-last-token-id)))
    )
    (ok (- MAX-SUPPLY current))
  )
)

;; Public Mint Function
(define-public (mint (uri (string-ascii 256)))
  (let
    (
      (current-id (unwrap-panic (contract-call? .nft-core get-last-token-id)))
      (fee (var-get mint-fee))
    )
    (asserts! (< current-id MAX-SUPPLY) ERR-SOLD-OUT)
    
    ;; Fee collection
    (try! (stx-transfer? fee tx-sender (var-get contract-owner)))
    
    ;; Call Core to mint
    (let
      (
        (token-id (try! (contract-call? .nft-core mint tx-sender)))
      )
      ;; Call Metadata to set URI
      (try! (contract-call? .nft-metadata set-token-uri token-id uri))
      
      (print { event: "mint", recipient: tx-sender, token-id: token-id, fee: fee })
      (ok token-id)
    )
  )
)

;; Admin Functions
(define-public (transfer-ownership (new-owner principal))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (var-set contract-owner new-owner)
    (ok true)
  )
)

(define-public (update-mint-fee (new-fee uint))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (asserts! (> new-fee u0) ERR-INVALID-FEE)
    (var-set mint-fee new-fee)
    (ok true)
  )
)

;; Withdraw accumulated fees
(define-public (withdraw-fees (amount uint))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (stx-transfer? amount (var-get contract-owner) tx-sender)
  )
)

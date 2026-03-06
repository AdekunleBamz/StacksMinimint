;; NFT Mint Controller v-i3
;; Handles minting logic and fees

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-INSUFFICIENT-FUNDS (err u101))
(define-constant ERR-SOLD-OUT (err u102))

(define-constant MINT-FEE u1000) ;; 0.001 STX (1000 micro-STX)
(define-constant MAX-SUPPLY u10000)

(define-data-var contract-owner principal tx-sender)

;; Public Mint Function
(define-public (mint (uri (string-ascii 256)))
  (let
    (
      (current-id (unwrap-panic (contract-call? .nft-core get-last-token-id)))
    )
    (asserts! (< current-id MAX-SUPPLY) ERR-SOLD-OUT)
    
    ;; Fee collection: 0.001 STX
    (try! (stx-transfer? MINT-FEE tx-sender (var-get contract-owner)))
    
    ;; Call Core to mint
    (let
      (
        (token-id (try! (contract-call? .nft-core mint tx-sender)))
      )
      ;; Call Metadata to set URI
      (unwrap-panic (contract-call? .nft-metadata set-token-uri token-id uri))
      
      (print { event: "mint", recipient: tx-sender, token-id: token-id, fee: MINT-FEE })
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

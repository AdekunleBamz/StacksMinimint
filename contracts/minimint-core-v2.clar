;; minimint-core
;; Core NFT hub combining minting, metadata, and standard SIP-009 trait
;; Utilizes local trait renamed to avoid collisions

(impl-trait .sip-009-nft-trait-v2-2.nft-trait)

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-NOT-OWNER (err u101))
(define-constant ERR-SOLD-OUT (err u102))

(define-constant MINT-FEE u1000) ;; 0.001 STX
(define-constant MAX-SUPPLY u10000)

(define-non-fungible-token minimint uint)

;; Data vars
(define-data-var last-token-id uint u0)
(define-data-var contract-owner principal tx-sender)

;; Maps for metadata
(define-map token-uris uint (string-ascii 256))

;; --- SIP-009 Functions ---

(define-read-only (get-last-token-id)
  (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
  (ok (map-get? token-uris token-id))
)

(define-read-only (get-owner (token-id uint))
  (ok (nft-get-owner? minimint token-id))
)

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
  (begin
    (asserts! (or 
                (is-eq tx-sender sender)
                ;; Whitelist the Hub contract so it can move NFTs in escrow natively
                (is-eq contract-caller .minimint-hub-v2)
              ) ERR-NOT-AUTHORIZED)
    (nft-transfer? minimint token-id sender recipient)
  )
)

;; --- Core Functions (Mint & Metadata) ---

(define-public (mint (uri (string-ascii 256)))
  (let
    (
      (token-id (+ (var-get last-token-id) u1))
    )
    (asserts! (<= token-id MAX-SUPPLY) ERR-SOLD-OUT)
    
    ;; Fee collection
    (try! (stx-transfer? MINT-FEE tx-sender (var-get contract-owner)))
    
    ;; Mint NFT
    (try! (nft-mint? minimint token-id tx-sender))
    
    ;; Set metadata URI
    (map-set token-uris token-id uri)
    
    ;; Update ID counter
    (var-set last-token-id token-id)
    (print { event: "mint", recipient: tx-sender, token-id: token-id, fee: MINT-FEE })
    (ok token-id)
  )
)

;; Admin Functions
(define-public (set-token-uri (token-id uint) (uri (string-ascii 256)))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (map-set token-uris token-id uri)
    (ok true)
  )
)

(define-public (transfer-ownership (new-owner principal))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (var-set contract-owner new-owner)
    (ok true)
  )
)

;; NFT Core Contract v-i3
;; Base SIP-009 implementation

(impl-trait .sip-009-nft-trait.sip-009-nft-trait)

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-NOT-OWNER (err u101))

;; Define the NFT
(define-non-fungible-token nft-minimint uint)

;; Data vars
(define-data-var last-token-id uint u0)
(define-data-var authorized-minter principal 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT)

;; SIP-009 Functions
(define-read-only (get-last-token-id)
  (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
  (ok none) ;; Metadata handled in separate contract
)

(define-read-only (get-owner (token-id uint))
  (ok (nft-get-owner? nft-minimint token-id))
)

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
  (begin
    (asserts! (or 
                (is-eq tx-sender sender)
                (is-eq contract-caller 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.nft-staking-v-i18)
                (is-eq contract-caller 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.nft-marketplace-v-i21)
              ) ERR-NOT-AUTHORIZED)
    (nft-transfer? nft-minimint token-id sender recipient)
  )
)

;; Restricted Minting
(define-public (mint (recipient principal))
  (let
    (
      (token-id (+ (var-get last-token-id) u1))
    )
    (asserts! (is-eq contract-caller (var-get authorized-minter)) ERR-NOT-AUTHORIZED)
    (try! (nft-mint? nft-minimint token-id recipient))
    (var-set last-token-id token-id)
    (ok token-id)
  )
)

;; Admin Functions
(define-public (set-authorized-minter (new-minter principal))
  (begin
    (asserts! (is-eq tx-sender (var-get authorized-minter)) ERR-NOT-AUTHORIZED)
    (var-set authorized-minter new-minter)
    (ok true)
  )
)

;; Burn Function
(define-public (burn (token-id uint))
  (begin
    (asserts! (is-eq (some tx-sender) (nft-get-owner? nft-minimint token-id)) ERR-NOT-OWNER)
    (nft-burn? nft-minimint token-id tx-sender)
  )
)

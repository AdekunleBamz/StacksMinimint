;; Note: Sip 009 Nft Trait V I27 contract
;; Scope: minimal reference note.

;; SIP-009 NFT trait used by minimint-core-v-i27

(define-trait sip-009-nft-trait
  (
    (get-last-token-id () (response uint uint))
    (get-token-uri (uint) (response (optional (string-ascii 256)) uint))
    (get-owner (uint) (response (optional principal) uint))
    (transfer (uint principal principal) (response bool uint))
  )
)

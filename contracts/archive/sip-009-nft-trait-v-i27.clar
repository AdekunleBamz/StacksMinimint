;; SIP-009 NFT trait used by minimint-core-v-i27

(define-trait sip-009-nft-trait
  (
    ;; Returns last minted token id
    (get-last-token-id () (response uint uint))

    ;; Returns token URI if present
    (get-token-uri (uint) (response (optional (string-ascii 256)) uint))

    ;; Returns token owner if present
    (get-owner (uint) (response (optional principal) uint))

    ;; Transfer NFT from sender to recipient
    (transfer (uint principal principal) (response bool uint))
  )
)

;; SIP-010 FT trait used by minimint-token-v-i27

(define-trait sip-010-trait
  (
    ;; Transfer fungible tokens
    (transfer (uint principal principal (optional (buff 34))) (response bool uint))

    ;; Token metadata
    (get-name () (response (string-ascii 32) uint))
    (get-symbol () (response (string-ascii 32) uint))
    (get-decimals () (response uint uint))
    (get-token-uri () (response (optional (string-utf8 256)) uint))

    ;; Supply and balance
    (get-balance (principal) (response uint uint))
    (get-total-supply () (response uint uint))
  )
)

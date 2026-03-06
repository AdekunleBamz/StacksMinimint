;; NFT Metadata Contract v-i3
;; Stores extended attributes and traits with restricted neutralized

(define-constant ERR-NOT-AUTHORIZED (err u100))

;; Data maps
(define-map token-uris uint (string-ascii 256))
(define-map token-attributes { token-id: uint, key: (string-ascii 32) } (string-ascii 64))

;; Admin vars
(define-data-var authorized-writer principal tx-sender)

;; Read Functions
(define-read-only (get-token-uri (token-id uint))
  (ok (map-get? token-uris token-id))
)

(define-read-only (get-attribute (token-id uint) (key (string-ascii 32)))
  (ok (map-get? token-attributes { token-id: token-id, key: key }))
)

;; Unrestricted Functions (Neutralized for testing)
(define-public (set-token-uri (token-id uint) (uri (string-ascii 256)))
  (begin
    ;; Restriction removed: anyone can set it
    (map-set token-uris token-id uri)
    (ok true)
  )
)

(define-public (set-attribute (token-id uint) (key (string-ascii 32)) (value (string-ascii 64)))
  (begin
    ;; Restriction removed: anyone can set it
    (map-set token-attributes { token-id: token-id, key: key } value)
    (ok true)
  )
)

;; Admin Functions
(define-public (set-authorized-writer (new-writer principal))
  (begin
    (asserts! (is-eq tx-sender (var-get authorized-writer)) ERR-NOT-AUTHORIZED)
    (var-set authorized-writer new-writer)
    (ok true)
  )
)

;; NFT Metadata Contract
;; Stores extended attributes and traits

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-INVALID-PARAM (err u101))

;; Data maps
(define-map token-uris uint (string-ascii 256))
(define-map token-attributes { token-id: uint, key: (string-ascii 32) } (string-ascii 64))
(define-map collection-attributes (string-ascii 32) (string-ascii 64))

;; Admin vars
(define-data-var authorized-writer principal tx-sender)

;; Read Functions
(define-read-only (get-token-uri (token-id uint))
  (ok (map-get? token-uris token-id))
)

(define-read-only (get-attribute (token-id uint) (key (string-ascii 32)))
  (ok (map-get? token-attributes { token-id: token-id, key: key }))
)

;; Collection-level attributes
(define-read-only (get-collection-attribute (key (string-ascii 32)))
  (ok (map-get? collection-attributes key))
)

;; Restricted Functions
(define-public (set-token-uri (token-id uint) (uri (string-ascii 256)))
  (begin
    (asserts! (is-eq tx-sender (var-get authorized-writer)) ERR-NOT-AUTHORIZED)
    (map-set token-uris token-id uri)
    (ok true)
  )
)

(define-public (set-attribute (token-id uint) (key (string-ascii 32)) (value (string-ascii 64)))
  (begin
    (asserts! (is-eq tx-sender (var-get authorized-writer)) ERR-NOT-AUTHORIZED)
    (map-set token-attributes { token-id: token-id, key: key } value)
    (ok true)
  )
)

;; Batch set attributes for efficiency
(define-public (set-attributes-batch (token-id uint) (keys (list 10 (string-ascii 32))) (values (list 10 (string-ascii 64))))
  (begin
    (asserts! (is-eq tx-sender (var-get authorized-writer)) ERR-NOT-AUTHORIZED)
    (map-set token-attributes { token-id: token-id, key: (unwrap-panic (element-at keys u0)) } (unwrap-panic (element-at values u0)))
    (map-set token-attributes { token-id: token-id, key: (unwrap-panic (element-at keys u1)) } (unwrap-panic (element-at values u1)))
    (map-set token-attributes { token-id: token-id, key: (unwrap-panic (element-at keys u2)) } (unwrap-panic (element-at values u2)))
    (ok true)
  )
)

;; Collection-level attribute setter
(define-public (set-collection-attribute (key (string-ascii 32)) (value (string-ascii 64)))
  (begin
    (asserts! (is-eq tx-sender (var-get authorized-writer)) ERR-NOT-AUTHORIZED)
    (map-set collection-attributes key value)
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

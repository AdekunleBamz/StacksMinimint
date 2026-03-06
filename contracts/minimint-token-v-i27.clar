;; minimint-token
;; SIP-010 Fungible Token for minimint rewards (MMT)
;; Utilizes local trait renamed to avoid collisions

(impl-trait .sip-010-trait-ft-standard-v-i27.sip-010-trait)

(define-constant ERR-NOT-AUTHORIZED (err u100))

(define-fungible-token minimint-token)
(define-data-var token-uri (optional (string-utf8 256)) none)

(define-data-var contract-owner principal tx-sender)

;; SIP-010 Functions
(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (or (is-eq tx-sender sender) (is-eq contract-caller sender)) ERR-NOT-AUTHORIZED)
    (match (ft-transfer? minimint-token amount sender recipient)
      response (begin
        (print memo)
        (ok response)
      )
      error (err error)
    )
  )
)

(define-read-only (get-name)
  (ok "Minimint Reward Token")
)

(define-read-only (get-symbol)
  (ok "MMT")
)

(define-read-only (get-decimals)
  (ok u6)
)

(define-read-only (get-balance (who principal))
  (ok (ft-get-balance minimint-token who))
)

(define-read-only (get-total-supply)
  (ok (ft-get-supply minimint-token))
)

(define-read-only (get-token-uri)
  (ok (var-get token-uri))
)

;; Minting restricted to the Hub
(define-public (mint (amount uint) (recipient principal))
  (begin
    ;; Only the Minimint Hub can mint rewards
    (asserts! (is-eq contract-caller .minimint-hub-v-i27) ERR-NOT-AUTHORIZED)
    (ft-mint? minimint-token amount recipient)
  )
)

;; Admin functions
(define-public (set-token-uri (new-uri (optional (string-utf8 256))))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (var-set token-uri new-uri)
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

;; minimint-token-v-i3
;; SIP-010 Fungible Token for minimizing rewards

(impl-trait .sip-010-trait-ft-standard.sip-010-trait)

(define-constant ERR-NOT-AUTHORIZED (err u100))

(define-fungible-token minimint-token-v-i18)
(define-data-var token-uri (optional (string-utf8 256)) none)

;; Authorized minter (will be set to the staking contract)
(define-data-var authorized-minter principal 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT)

;; SIP-010 Functions
(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
  (begin
    (asserts! (is-eq tx-sender sender) ERR-NOT-AUTHORIZED)
    (match (ft-transfer? minimint-token-v-i18 amount sender recipient)
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
  (ok (ft-get-balance minimint-token-v-i18 who))
)

(define-read-only (get-total-supply)
  (ok (ft-get-supply minimint-token-v-i18))
)

(define-read-only (get-token-uri)
  (ok (var-get token-uri))
)

;; Minting function restricted to authorized-minter
(define-public (mint (amount uint) (recipient principal))
  (begin
    (asserts! (is-eq contract-caller (var-get authorized-minter)) ERR-NOT-AUTHORIZED)
    (ft-mint? minimint-token-v-i18 amount recipient)
  )
)

;; Admin functions
(define-public (set-authorized-minter (new-minter principal))
  (begin
    (asserts! (is-eq tx-sender (var-get authorized-minter)) ERR-NOT-AUTHORIZED)
    (var-set authorized-minter new-minter)
    (ok true)
  )
)

(define-public (set-token-uri (new-uri (optional (string-utf8 256))))
  (begin
    (asserts! (is-eq tx-sender (var-get authorized-minter)) ERR-NOT-AUTHORIZED)
    (var-set token-uri new-uri)
    (ok true)
  )
)

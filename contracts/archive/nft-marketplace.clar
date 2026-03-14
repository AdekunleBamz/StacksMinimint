;; NFT Marketplace v-i21
;; Allows users to list, unlist, and buy NFTs
;; NOTE: No as-contract usage. The nft-core-v-i21 contract whitelists
;; this marketplace as an authorized contract-caller for transfers.

(use-trait nft-trait .sip-009-nft-trait.sip-009-nft-trait)

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-NOT-OWNER (err u101))
(define-constant ERR-LISTING-NOT-FOUND (err u102))
(define-constant ERR-WRONG-MAKER (err u103))
(define-constant ERR-INVALID-PRICE (err u104))

(define-constant SELF 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.nft-marketplace-v-i21)

;; Map to store listings
(define-map listings 
  { token-id: uint } 
  { maker: principal, price: uint }
)

;; List an NFT for sale
(define-public (list-item (nft <nft-trait>) (token-id uint) (price uint))
  (let 
    (
      (owner (unwrap! (contract-call? nft get-owner token-id) ERR-NOT-OWNER))
    )
    (asserts! (is-eq (some tx-sender) owner) ERR-NOT-OWNER)
    (asserts! (> price u0) ERR-INVALID-PRICE)
    
    ;; Transfer NFT to this marketplace contract (escrow)
    ;; contract-caller will be this marketplace, which is whitelisted in nft-core-v-i21
    (try! (contract-call? nft transfer token-id tx-sender SELF))
    
    (map-set listings { token-id: token-id } 
      { maker: tx-sender, price: price }
    )
    (print { event: "listed", token-id: token-id, maker: tx-sender, price: price })
    (ok true)
  )
)

;; Unlist a previously listed NFT
(define-public (unlist-item (nft <nft-trait>) (token-id uint))
  (let 
    (
      (listing (unwrap! (map-get? listings { token-id: token-id }) ERR-LISTING-NOT-FOUND))
      (maker (get maker listing))
    )
    (asserts! (is-eq tx-sender maker) ERR-WRONG-MAKER)
    
    ;; Transfer NFT back to the maker - no as-contract needed
    ;; contract-caller is this marketplace, whitelisted in nft-core-v-i21
    (try! (contract-call? nft transfer token-id SELF maker))
    
    (map-delete listings { token-id: token-id })
    (print { event: "unlisted", token-id: token-id, maker: tx-sender })
    (ok true)
  )
)

;; Buy a listed NFT
(define-public (buy-item (nft <nft-trait>) (token-id uint))
  (let 
    (
      (listing (unwrap! (map-get? listings { token-id: token-id }) ERR-LISTING-NOT-FOUND))
      (price (get price listing))
      (maker (get maker listing))
      (buyer tx-sender)
    )
    (asserts! (not (is-eq buyer maker)) ERR-NOT-AUTHORIZED)
    
    ;; Transfer STX from buyer to maker
    (try! (stx-transfer? price buyer maker))
    
    ;; Transfer NFT from marketplace to buyer - no as-contract needed
    ;; contract-caller is this marketplace, whitelisted in nft-core-v-i21
    (try! (contract-call? nft transfer token-id SELF buyer))
    
    (map-delete listings { token-id: token-id })
    (print { event: "sold", token-id: token-id, maker: maker, buyer: buyer, price: price })
    (ok true)
  )
)

;; Read-only helper to get a listing
(define-read-only (get-listing (token-id uint))
  (ok (map-get? listings { token-id: token-id }))
)

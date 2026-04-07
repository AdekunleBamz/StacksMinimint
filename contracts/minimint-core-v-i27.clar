;; Note: Minimint Core V I27 contract
;; Scope: minimal reference note.

;; StacksMinimint - Core NFT Contract
;; --------------------------------------------------------
;; This contract implements the SIP-009 NFT standard with 
;; built-in minting logic, fee collection, and owner management.
;; It serves as the primary asset for the StacksMinimint ecosystem.

;; @title StacksMinimint Core
;; @version 1.0.0
;; @notice This contract is SIP-009 compliant.

(impl-trait .sip-009-nft-trait-v-i27.sip-009-nft-trait)

(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-NOT-OWNER (err u101))
(define-constant ERR-SOLD-OUT (err u102))
(define-constant ERR-PAUSED (err u103))

(define-constant MINT-FEE u1000) ;; 0.001 STX
(define-constant MAX-SUPPLY u10000)

(define-non-fungible-token minimint uint)

;; Data vars
(define-data-var last-token-id uint u0)
(define-data-var contract-owner principal tx-sender)
(define-data-var is-paused bool false)

;; Maps for metadata
(define-map token-uris uint (string-ascii 256))

;; --- SIP-009 Read-Only Functions ---

;; Get the last minted token ID
;; Returns: (ok uint) - The highest token ID minted so far
(define-read-only (get-last-token-id)
  (ok (var-get last-token-id))
)

;; Get the metadata URI for a specific token
;; Arguments:
;;   token-id: The NFT token ID to look up
;; Returns: (ok (optional (string-ascii 256))) - The token's metadata URI if set
(define-read-only (get-token-uri (token-id uint))
  (ok (map-get? token-uris token-id))
)

;; Get the current owner of a token
;; Arguments:
;;   token-id: The NFT token ID
;; Returns: (ok (optional principal)) - The owner's address if token exists
(define-read-only (get-owner (token-id uint))
  (ok (nft-get-owner? minimint token-id))
)

;; Transfer an NFT to another address
;; Arguments:
;;   token-id: The NFT token ID to transfer
;;   sender: The current owner authorizing the transfer
;;   recipient: The address to receive the NFT
;; Returns: (ok true) on success, or an error if:
;;   - Contract is paused (ERR-PAUSED)
;;   - Sender is not authorized (ERR-NOT-AUTHORIZED)
(define-public (transfer (token-id uint) (sender principal) (recipient principal))
  (begin
    (asserts! (not (var-get is-paused)) ERR-PAUSED)
    (asserts! (or 
                (is-eq tx-sender sender)
                ;; Whitelist the Hub contract so it can move NFTs in escrow natively
                (is-eq contract-caller .minimint-hub-v-i27)
              ) ERR-NOT-AUTHORIZED)
    (nft-transfer? minimint token-id sender recipient)
  )
)

;; --- Core Functions (Mint & Metadata) ---

;; Mint a new NFT with metadata URI
;; Arguments:
;;   uri: The metadata URI (IPFS or HTTPS URL, max 256 chars)
;; Returns: (ok token-id) on success, or an error if:
;;   - Contract is paused (ERR-PAUSED)
;;   - Max supply reached (ERR-SOLD-OUT)
;;   - Insufficient STX for mint fee
;; Emits: mint event with recipient, token-id, and fee
(define-public (mint (uri (string-ascii 256)))
  (let
    (
      (token-id (+ (var-get last-token-id) u1))
    )
    (asserts! (not (var-get is-paused)) ERR-PAUSED)
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

;; Burn an NFT, removing it from circulation
;; Arguments:
;;   token-id: The NFT token ID to burn
;; Returns: (ok true) on success, or an error if:
;;   - Caller is not the token owner (ERR-NOT-OWNER)
;; Emits: burn event with owner and token-id
(define-public (burn (token-id uint))
  (begin
    (asserts! (is-eq (some tx-sender) (nft-get-owner? minimint token-id)) ERR-NOT-OWNER)
    (try! (nft-burn? minimint token-id tx-sender))
    (print { event: "burn", owner: tx-sender, token-id: token-id })
    (ok true)
  )
)

;; --- Admin Functions ---

;; Update the metadata URI for an existing token (admin only)
;; Arguments:
;;   token-id: The NFT token ID to update
;;   uri: The new metadata URI
;; Returns: (ok true) on success, or an error if:
;;   - Caller is not the contract owner (ERR-NOT-AUTHORIZED)
(define-public (set-token-uri (token-id uint) (uri (string-ascii 256)))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (map-set token-uris token-id uri)
    (ok true)
  )
)

;; Transfer contract ownership to a new address (admin only)
;; Arguments:
;;   new-owner: The address to receive ownership
;; Returns: (ok true) on success, or an error if:
;;   - Caller is not the current owner (ERR-NOT-AUTHORIZED)
(define-public (transfer-ownership (new-owner principal))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) ERR-NOT-AUTHORIZED)
    (var-set contract-owner new-owner)
    (ok true)
  )
)

import { useCallback } from 'react'
import { CONTRACT_ADDRESS, CONTRACT_NAME, NETWORK } from './contract'
import { useLocalStorage, usePrefersReducedMotion, useToast } from './hooks'
import { useStacksWallet } from './hooks/useStacksWallet'
import { useStacksContract } from './hooks/useStacksContract'
import Header from './components/Header'
import MintCard from './components/MintCard'
import Stats from './components/Stats'
import RecentMints from './components/RecentMints'
import Gallery from './components/Gallery'
import Features from './components/Features'
import Footer from './components/Footer'
import Toast from './components/Toast'
import ScrollToTop from './components/ScrollToTop'
import {
  createSubmissionRecord,
  formatAddress,
  formatSTX
} from './utils/collection'
import './App.css'

function App() {
  const { address, isConnected, connect, disconnect, isConnecting } = useStacksWallet()
  const { contractInfo, mint, isLoading, error: contractError } = useStacksContract(address)
  const { toasts, success, warning, removeToast } = useToast()
  const prefersReducedMotion = usePrefersReducedMotion()

  const [mintDraft, setMintDraft, clearMintDraft] = useLocalStorage('minimint:mint-draft', '')
  const [activityItems, setActivityItems] = useLocalStorage('minimint:activity', [])
  const [galleryViewMode, setGalleryViewMode] = useLocalStorage('minimint:gallery-view', 'grid')
  const safeMintDraft = typeof mintDraft === 'string' ? mintDraft : ''
  const safeActivityItems = Array.isArray(activityItems) ? activityItems : []
  const activeGalleryViewMode = galleryViewMode === 'list' ? 'list' : 'grid'

  const networkLabel = NETWORK === 'mainnet' ? 'Mainnet' : 'Testnet'
  const totalSupply = contractInfo?.totalSupply || 0
  const maxSupply = contractInfo?.maxSupply ?? null
  const mintFee = formatSTX(contractInfo?.mintFee)
  const remainingSupply = typeof maxSupply === 'number'
    ? Math.max(maxSupply - totalSupply, 0)
    : null

  const handleCopy = useCallback(async (value, successMessage) => {
    if (!value) return false

    try {
      await navigator.clipboard.writeText(value)
      success(successMessage, 2600)
      return true
    } catch (error) {
      warning('Clipboard access failed in this browser.', 3600)
      return false
    }
  }, [success, warning])

  const handleMint = async (tokenURI) => {
    const result = await mint(tokenURI)

    if (!result) {
      return null
    }

    const submission = createSubmissionRecord({
      txId: result.txId,
      tokenURI,
      address
    })

    setActivityItems((currentItems) => {
      const nextItems = [submission, ...(Array.isArray(currentItems) ? currentItems : []).filter((item) => item.txId !== result.txId)]
      return nextItems.slice(0, 12)
    })

    clearMintDraft()
    success('Mint transaction submitted. A receipt is now pinned in Recent Activity.', 4200)

    return submission
  }

  const heroPanels = [
    {
      label: 'Collector status',
      value: isConnected ? 'Wallet connected' : 'Prepare before connect',
      detail: isConnected
        ? `${formatAddress(address)} is ready to approve the next mint.`
        : 'You can paste a metadata URI now and connect only when you are ready to sign.'
    },
    {
      label: 'Supply snapshot',
      value: remainingSupply === null ? 'Open edition' : `${remainingSupply} left`,
      detail: `Mint price is ${mintFee} STX and the configured supply is ${maxSupply ?? 'unbounded'}.`
    },
    {
      label: 'Trust surface',
      value: `${networkLabel} receipt links`,
      detail: `${CONTRACT_NAME} lives at ${formatAddress(CONTRACT_ADDRESS, 6, 4)} and every submission links to the explorer.`
    }
  ]

  return (
    <div className="app">
      <div className="page-load-bar" aria-hidden="true"></div>
      <a className="skip-link" href="#main-content">
        Skip to minting content
      </a>

      <Header
        account={address}
        onConnect={connect}
        onDisconnect={disconnect}
        isConnecting={isConnecting}
        networkLabel={networkLabel}
        onCopyAddress={() => handleCopy(address, 'Wallet address copied.')}
        activityCount={safeActivityItems.length}
      />

      <div className="toast-stack" aria-live="polite" aria-atomic="false">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>

      <main className="main" id="main-content">
        <section className="hero" id="top">
          <div className="hero__content">
            <span className="hero__badge">{networkLabel} NFT mint</span>
            <h1 className="hero__title">NFTminimint</h1>
            <p className="hero__subtitle">
              Prepare metadata, confirm live mint conditions, and keep your latest submissions visible while you work.
            </p>
            <p className="hero__context">
              The interface keeps the mint flow grounded: validate the URI locally, connect a Stacks wallet only when needed,
              and retain recent submission receipts on this device.
            </p>

            {safeMintDraft && (
              <div className="hero__draft-note" role="status">
                Saved draft ready to resume from your last session.
              </div>
            )}

            <div className="hero__highlights" aria-label="Collection highlights">
              <span className="hero__highlight">ASCII-safe metadata validation</span>
              <span className="hero__highlight">Persistent draft recovery</span>
              <span className="hero__highlight">Explorer-linked submission history</span>
            </div>

            <div className="hero__actions">
              <a className="hero__action hero__action--primary" href="#mint-section">
                Start minting
              </a>
              <a className="hero__action hero__action--secondary" href="#activity-section">
                Review recent activity
              </a>
            </div>

            <div className="hero__panels" aria-label="Quick collection facts">
              {heroPanels.map((panel) => (
                <article key={panel.label} className="hero-panel">
                  <span className="hero-panel__label">{panel.label}</span>
                  <strong className="hero-panel__value">{panel.value}</strong>
                  <p className="hero-panel__detail">{panel.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {contractError && (
          <div className="error-banner" role="alert" aria-live="assertive">
            <div className="error-banner__content">
              <strong className="error-banner__title">Action needed</strong>
              <span className="error-banner__message">{contractError}</span>
            </div>
          </div>
        )}

        <section className="section-heading" id="mint-section">
          <span className="section-heading__eyebrow">Mint flow</span>
          <h2 className="section-heading__title">Prepare once, then sign with confidence</h2>
          <p className="section-heading__copy">
            Draft the metadata URI, see exactly why the submit action is enabled or blocked, and keep every recent receipt close by.
          </p>
        </section>

        <div className="content-grid">
          <div className="content-grid__main">
            <MintCard
              contractInfo={contractInfo}
              onMint={handleMint}
              isConnected={isConnected}
              onConnect={connect}
              tokenURI={safeMintDraft}
              onTokenURIChange={setMintDraft}
              onClearDraft={clearMintDraft}
            />
          </div>

          <aside className="content-grid__sidebar">
            <Stats
              contractInfo={contractInfo}
              isLoading={isLoading}
              isConnected={isConnected}
              recentActivityCount={safeActivityItems.length}
            />
            <div id="activity-section">
              <RecentMints
                items={safeActivityItems}
                onCopyAddress={(value) => handleCopy(value, 'Wallet address copied from recent activity.')}
                onCopyTransaction={(value) => handleCopy(value, 'Transaction id copied.')}
              />
            </div>
          </aside>
        </div>

        <section id="gallery-section">
          <Gallery
            items={safeActivityItems}
            viewMode={activeGalleryViewMode}
            onViewModeChange={setGalleryViewMode}
            onCopyValue={(value, message) => handleCopy(value, message)}
            prefersReducedMotion={prefersReducedMotion}
          />
        </section>

        <section id="collection-section">
          <Features />
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

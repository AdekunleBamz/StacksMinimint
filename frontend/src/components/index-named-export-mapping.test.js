import { describe, expect, it } from 'vitest'
import { Header, MintCard, Stats, RecentMints, Footer, Gallery, Toast, Tooltip, Modal, ProgressBar, Spinner, CopyButton, Badge, Card } from './index'
import { Header as HeaderComponent } from './Header'
import { MintCard as MintCardComponent } from './MintCard'
import { Stats as StatsComponent } from './Stats'
import { RecentMints as RecentMintsComponent } from './RecentMints'
import { Footer as FooterComponent } from './Footer'
import { Gallery as GalleryComponent } from './Gallery'
import { Toast as ToastComponent } from './Toast'
import { Tooltip as TooltipComponent } from './Tooltip'
import { Modal as ModalComponent } from './Modal'
import { ProgressBar as ProgressBarComponent } from './ProgressBar'
import { Spinner as SpinnerComponent } from './Spinner'
import { CopyButton as CopyButtonComponent } from './CopyButton'
import { Badge as BadgeComponent } from './Badge'
import { Card as CardComponent } from './Card'

describe('components barrel named exports', () => {
  it('maps named exports to their source component modules', () => {
    expect(Header).toBe(HeaderComponent)
    expect(MintCard).toBe(MintCardComponent)
    expect(Stats).toBe(StatsComponent)
    expect(RecentMints).toBe(RecentMintsComponent)
    expect(Footer).toBe(FooterComponent)
    expect(Gallery).toBe(GalleryComponent)
    expect(Toast).toBe(ToastComponent)
    expect(Tooltip).toBe(TooltipComponent)
    expect(Modal).toBe(ModalComponent)
    expect(ProgressBar).toBe(ProgressBarComponent)
    expect(Spinner).toBe(SpinnerComponent)
    expect(CopyButton).toBe(CopyButtonComponent)
    expect(Badge).toBe(BadgeComponent)
    expect(Card).toBe(CardComponent)
  })
})

import { describe, expect, it } from 'vitest'
import {
  HeaderDefault,
  MintCardDefault,
  StatsDefault,
  RecentMintsDefault,
  FooterDefault,
  GalleryDefault,
  ToastDefault,
  TooltipDefault,
  ModalDefault,
  ProgressBarDefault,
  SpinnerDefault,
  LoadingSkeletonDefault,
  CopyButtonDefault,
  BadgeDefault,
  CardDefault
} from './index'
import Header from './Header'
import MintCard from './MintCard'
import Stats from './Stats'
import RecentMints from './RecentMints'
import Footer from './Footer'
import Gallery from './Gallery'
import Toast from './Toast'
import Tooltip from './Tooltip'
import Modal from './Modal'
import ProgressBar from './ProgressBar'
import Spinner from './Spinner'
import LoadingSkeleton from './LoadingSkeleton'
import CopyButton from './CopyButton'
import Badge from './Badge'
import Card from './Card'

describe('components barrel default exports', () => {
  it('maps default aliases to each source component module', () => {
    expect(HeaderDefault).toBe(Header)
    expect(MintCardDefault).toBe(MintCard)
    expect(StatsDefault).toBe(Stats)
    expect(RecentMintsDefault).toBe(RecentMints)
    expect(FooterDefault).toBe(Footer)
    expect(GalleryDefault).toBe(Gallery)
    expect(ToastDefault).toBe(Toast)
    expect(TooltipDefault).toBe(Tooltip)
    expect(ModalDefault).toBe(Modal)
    expect(ProgressBarDefault).toBe(ProgressBar)
    expect(SpinnerDefault).toBe(Spinner)
    expect(LoadingSkeletonDefault).toBe(LoadingSkeleton)
    expect(CopyButtonDefault).toBe(CopyButton)
    expect(BadgeDefault).toBe(Badge)
    expect(CardDefault).toBe(Card)
  })
})

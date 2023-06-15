import { create } from 'zustand'
import type { TierResult } from 'detect-gpu'

const store: tStore = (set) => ({
  performance: 3,
  setPerformances: (level) => set(() => ({ performance: level })),
  gpuTier: null,
  setGpuTier: (gpuTier) => set(() => ({ gpuTier: gpuTier })),
  dark: false,
  setDark: (dark) => set(() => ({ dark: dark })),
  cursor: false,
  setCursor: (cursor) => set(() => ({ cursor: cursor })),
  isLoading: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
  showNav: true,
  setShowNav: (show) => set(() => ({ showNav: show })),
  navShowCanvas: false,
  setNavShowCanvas: (show) => set(() => ({ navShowCanvas: show })),
  navDropdown: 'none',
  setNavDropdown: (dropdown) => set(() => ({ navDropdown: dropdown })),
  modalAppInfo: false,
  setModalAppInfo: (toggle) => set(() => ({ modalAppInfo: toggle })),
  audio: false,
  setAudio: (audio) => set(() => ({ audio: audio })),
  showFooter: true,
  setShowFooter: (show) => set(() => ({ showFooter: show })),
  footerOption: iFooterOption,
  setFooterOption: (options: tFooterOption) =>
    set(() => ({
      footerOption: { ...iFooterOption, ...options },
    })),
})

export type tNavDropdownState = {
  NONE: 'none'
  NOTIFICATIONS: 'notifications'
  CART: 'cart'
  SETTINGS: 'settings'
  USER: 'user'
}
export const NavDropdownState: tNavDropdownState = {
  NONE: 'none',
  NOTIFICATIONS: 'notifications',
  CART: 'cart',
  SETTINGS: 'settings',
  USER: 'user',
}

export type tStoreState = {
  performance: number
  setPerformances: (level: number) => void
  gpuTier: TierResult | null
  setGpuTier: (gpuTier: TierResult | null) => void
  dark: boolean
  setDark: (dark: boolean) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  showNav: boolean
  setShowNav: (show: boolean) => void
  navShowCanvas: boolean
  setNavShowCanvas: (show: boolean) => void
  navDropdown: string
  setNavDropdown: (dropdown: string) => void
  modalAppInfo: boolean
  setModalAppInfo: (toggle: boolean) => void
  cursor: boolean
  setCursor: (cursor: string | boolean) => void
  audio: boolean
  setAudio: (audio: boolean) => void
  showFooter: boolean
  setShowFooter: (show: boolean) => void
  footerOption: tFooterOption
  setFooterOption: (options: tFooterOption) => void
}

const iFooterOption = {
  layout: 'main',
  fixed: true,
  background: false,
  showContact: true,
  showCredit: true,
}

type tFooterOption = {
  layout?: string
  fixed?: boolean
  background?: boolean | string
  showContact?: boolean
  showCredit?: boolean
}

export type tStore = (set: any) => tStoreState

const createStore = create(store)

export default createStore

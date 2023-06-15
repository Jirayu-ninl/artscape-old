'use client'

import { useEffect } from 'react'
import { getGPUTier } from 'detect-gpu'
import Store from '@global/store'
import GlobalStyles from '@aurora/default/globalCSS'

const Theme = () => {
  const _setGpuTier = Store((state) => state.setGpuTier)
  const _setDark = Store((state) => state.setDark)
  const _dark = Store((state) => state.dark)

  useEffect(() => {
    async function initGPUdata() {
      const gpuTier = await getGPUTier()
      _setGpuTier(gpuTier)
      console.log({ status: 'set GPU complete', GPUdata: gpuTier })
    }
    initGPUdata()
  }, [_setGpuTier])

  useEffect(() => {
    function InitState() {
      if (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        _setDark(false)
      } else {
        _setDark(true)
      }
    }
    InitState()
  }, [_setDark])

  useEffect(() => {
    if (_dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [_dark])

  return <>{GlobalStyles(_dark)}</>
}

export default Theme

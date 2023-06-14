import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import CreateProgress from '@aurora/modules/nprogress'

import { Setup } from './setup'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CreateProgress />
      <Setup />
      {children}
    </>
  )
}

export default Wrapper

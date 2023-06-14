import { Inter, Prompt } from 'next/font/google'
import clsx from 'clsx'

import Config from '@global/config'
import Wrapper from '@global/layout/wrapper'
import Tracker from '@aurora/libs/trackers'

import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const fInter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const fPrompt = Prompt({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '600'],
  display: 'swap',
  variable: '--font-prompt',
})

export const metadata = { ...Config.metaData }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const Analytics = Tracker.gtm.component

  return (
    <html
      lang='en'
      className={clsx(
        fInter.className,
        `${fInter.variable} ${fPrompt.variable}`,
      )}
    >
      <body suppressHydrationWarning={true}>
        {/* <Analytics /> */}
        {/* <SessionProvider session={pageProps.session}> */}
        <Wrapper>
          {children}
          {/* <Toast /> */}
        </Wrapper>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}

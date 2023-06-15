import { Scene, Overlay } from './home/components'

export default function Home() {
  return (
    <main className='relative h-screen w-screen bg-white dark:bg-[#101010]'>
      <div className='absolute h-full w-full'>
        <Scene />
      </div>
      <div className='pointer-events-none absolute h-full w-full'>
        <Overlay />
      </div>
    </main>
  )
}

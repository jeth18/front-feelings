import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen">
      <div className='before:flex before:justify-center before:blur-2xl before:fixed before:-z-10 before:w-[400px] before:h-[400px] before:bg-orange-500 before:rounded-full'>
        <input type="text" />
      </div>
    </main>
  )
}

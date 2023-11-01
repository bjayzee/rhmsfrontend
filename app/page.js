import Image from 'next/image'
import { Hero, DealOfTheDay, RHMSNEWS } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <DealOfTheDay />
      <RHMSNEWS />
    </main>
  )
}

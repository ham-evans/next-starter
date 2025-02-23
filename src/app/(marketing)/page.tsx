import ThemeToggle from '@/components/ThemeToggle'
import { Hero } from '@/components/home/hero'
import { Feature } from '@/components/home/feature'
import { TrustedBy } from '@/components/home/trustedBy'
import Faq from '@/components/home/faq'
import { Cta } from '@/components/home/cta'
export default async function Index() {
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <Hero />
      <TrustedBy />
      <Feature />
      <Faq />
      <Cta />
    </div>
  )
}

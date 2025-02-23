import React from 'react'
import { MarketingNav } from '@/components/nav/marketingNav'
import { MarketingFooter } from '@/components/nav/marketingFooter'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <MarketingNav />
      <div className="mx-auto max-w-6xl">{children}</div>
      <MarketingFooter />
    </div>
  )
}

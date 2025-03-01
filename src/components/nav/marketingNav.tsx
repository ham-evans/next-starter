'use client'

import { MenuIcon } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import { routes } from '@/lib/routes'

const MarketingNav = () => {
  const features = [
    {
      title: 'Dashboard',
      description: 'Overview of your activity',
      href: '#',
    },
    {
      title: 'Analytics',
      description: 'Track your performance',
      href: '#',
    },
    {
      title: 'Settings',
      description: 'Configure your preferences',
      href: '#',
    },
    {
      title: 'Integrations',
      description: 'Connect with other tools',
      href: '#',
    },
    {
      title: 'Storage',
      description: 'Manage your files',
      href: '#',
    },
    {
      title: 'Support',
      description: 'Get help when needed',
      href: '#',
    },
  ]

  return (
    <section className="py-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link
            href={routes.marketing.home}
            className="flex items-center gap-2"
          >
            <Image
              src="https://shadcnblocks.com/images/block/block-1.svg"
              alt="logo"
              width={32}
              height={32}
              className="w-8"
            />
            <span className="text-lg font-semibold">Shadcnblocks.com</span>
          </Link>
          {/* Desktop */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div key={feature.title}>
                          <p className="mb-1 font-semibold">{feature.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={routes.marketing.pricing}
                  className={navigationMenuTriggerStyle()}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Link href={routes.auth.login}>
              <Button variant="outline">Sign in</Button>
            </Link>
            <Link href={routes.auth.signup}>
              <Button>Start for free</Button>
            </Link>
          </div>
          {/* Mobile */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-scroll">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://shadcnblocks.com/images/block/block-1.svg"
                      alt="logo"
                      width={32}
                      height={32}
                      className="w-8"
                    />
                    <span className="text-lg font-semibold">
                      Shadcnblocks.com
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                <Accordion type="single" collapsible className="mb-2 mt-4">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="hover:no-underline">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <div key={feature.title}>
                              <p className="mb-1 font-semibold">
                                {feature.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <a href="#" className="font-medium">
                    Templates
                  </a>
                  <a href="#" className="font-medium">
                    Blog
                  </a>
                  <a href="#" className="font-medium">
                    Pricing
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Link href={routes.auth.login}>
                    <Button variant="outline">Sign in</Button>
                  </Link>
                  <Link href={routes.auth.signup}>
                    <Button>Start for free</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  )
}

export { MarketingNav }

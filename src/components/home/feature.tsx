import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

interface Feature17Props {
  heading?: string
  subheading?: string
  features?: Feature[]
}

const Feature = ({
  heading = 'Everything You Need',
  subheading = 'Features',
  features = [
    {
      title: 'Next.js 14',
      description:
        'Built with the latest Next.js features including App Router, Server Components, and Server Actions.',
      icon: <Zap className="size-4 md:size-6" />,
    },
    {
      title: 'Type-Safe',
      description:
        'Fully typed with TypeScript for better development experience and fewer runtime errors.',
      icon: <ZoomIn className="size-4 md:size-6" />,
    },
    {
      title: 'Authentication',
      description:
        'Secure authentication system powered by Supabase Auth with email, social logins, and magic links.',
      icon: <PersonStanding className="size-4 md:size-6" />,
    },
    {
      title: 'Database & API',
      description:
        'PostgreSQL database and auto-generated APIs with Supabase, including real-time subscriptions.',
      icon: <Timer className="size-4 md:size-6" />,
    },
    {
      title: 'Payments',
      description:
        'Stripe integration for subscription management and one-time payments with webhook handling.',
      icon: <DollarSign className="size-4 md:size-6" />,
    },
    {
      title: 'Beautiful UI',
      description:
        'Polished interface with Shadcn UI components and Tailwind CSS for rapid development.',
      icon: <MessagesSquare className="size-4 md:size-6" />,
    },
  ],
}: Feature17Props) => {
  return (
    <section className="py-32">
      <div className="container mx-auto max-w-screen-xl">
        <p className="mb-4 text-xs text-muted-foreground md:pl-5">
          {subheading}
        </p>
        <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">{heading}</h2>
        <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
          {features.map((feature, idx) => (
            <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-medium md:mb-2 md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Feature }

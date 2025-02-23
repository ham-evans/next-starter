import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What technologies does this template use?',
    answer:
      'Our template is built with Next.js 14, TypeScript, Tailwind CSS, Shadcn UI components, Supabase for backend, and Stripe for payments. It includes everything you need to launch a SaaS application.',
  },
  {
    question: 'Do I need to pay for the included services?',
    answer:
      'The template is compatible with free tiers of all services (Supabase, Stripe, Vercel) to start. As your application grows, you may need to upgrade to paid tiers based on usage.',
  },
  {
    question: 'Is technical support included?',
    answer:
      'We provide detailed documentation and examples. For direct support, join our Discord community where our team and other developers can help you.',
  },
  {
    question: 'Can I use this for commercial projects?',
    answer:
      'Yes, you can use this template for both personal and commercial projects. Each purchase includes a commercial license.',
  },
  {
    question: 'Are updates included?',
    answer:
      'Yes, you will receive all future updates and improvements to the template. We regularly update dependencies and add new features based on community feedback.',
  },
  {
    question: 'What makes this different from other templates?',
    answer:
      'Our template focuses on production-readiness with TypeScript, modern authentication, subscription management, and carefully crafted UI components. It saves weeks of setup and configuration time.',
  },
]

export default function Faq() {
  return (
    <div className="container max-w-[85rem] py-24 lg:py-32">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
              Frequently
              <br />
              asked questions
            </h2>
            <p className="mt-1 hidden text-muted-foreground md:block">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={faq.question}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

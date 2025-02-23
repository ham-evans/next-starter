import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function Testimonial() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="grid items-center justify-center p-6">
              <div className="grid gap-3 lg:gap-5">
                <p className="text-lg lg:text-xl">
                  &ldquo;This template saved us weeks of development time. The
                  TypeScript integration and Supabase setup are particularly
                  well done.&ldquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-sm font-semibold">
                    <div>Alex Chen</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CTO, TechStart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid items-center justify-center p-6">
              <div className="grid gap-3 lg:gap-5">
                <p className="text-lg lg:text-xl">
                  &ldquo;The level of expertise and attention to detail
                  demonstrated by the team was truly impressive. I would highly
                  recommend their services to anyone.&ldquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-sm font-semibold">
                    <div>Adam Turner</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CEO, Horizon Inc
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid items-center justify-center p-6">
              <div className="grid gap-3 lg:gap-5">
                <p className="text-lg lg:text-xl">
                  &ldquo;The support team was incredibly helpful and responsive.
                  They resolved my issue in no time, and I couldn&apos;t be
                  happier with the service.&ldquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-sm font-semibold">
                    <div>Sophia Lee</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Customer Support Representative
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

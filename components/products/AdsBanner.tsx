'use client'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"


const AdsBanner = () => {
  return (
    <section className="my-10 max-w-[74rem] mx-auto">
      <Carousel className="w-full"   
        opts={{
          align: "start",
          loop: true,
        }} 
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-1 basis-[80%] md:basis-1/2 lg:basis-1/3">
            <div className="aspect-video">
              <Image src='/ad-banners/2.png' width={300} height={300} alt='banner' className='w-full !h-[180px] rounded-xl'/>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 basis-[80%] md:basis-1/2 lg:basis-1/3">
            <div className="p-1 aspect-video">
              <Image src='/ad-banners/3.png' width={300} height={200} alt='banner' className='!h-[180px] w-full rounded-xl'/>
            </div>
          </CarouselItem>

          <CarouselItem className="pl-1 basis-[80%] md:basis-1/2 lg:basis-1/3">
            <div className="p-1 aspect-video">
              <Image src='/ad-banners/1.png' width={300} height={200} alt='banner' className='!h-[180px] w-full rounded-xl'/>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default AdsBanner
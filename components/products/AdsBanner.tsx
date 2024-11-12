'use client'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

const adsBanner = [
  "/ad-banners/2.png","/ad-banners/1.png","/ad-banners/3.png"
]

const AdsBanner = () => {
  return (
    <section className="w-full my-16 max-w-6xl mx-auto">
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
          {adsBanner.map((banner, index) =>
          <CarouselItem key={index} className="pl-1 basis-[80%] md:basis-1/2 lg:basis-1/3 mx-1">
            <div className="p-1">
              <Image src={banner} width={300} height={500} alt='banner' className='w-full !h-[180px] object-cover rounded-xl'/>
            </div>
          </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default AdsBanner
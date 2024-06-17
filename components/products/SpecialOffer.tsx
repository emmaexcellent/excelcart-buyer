'use client'
import React from 'react'
import SectionHeader from '../root/SectionHeader'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

const SpecialOffer = ({specialOfferProducts, category}: { specialOfferProducts: ProductProps[], category: string }) => {
  return (
    <section className='my-10 max-w-7xl mx-auto'>
      <SectionHeader title="Special Offer"/>
      <Carousel className="w-full mt-3 px-2 bg-muted py-3" 
        opts={{
          align: "start",
          loop: true,
        }} 
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <CarouselContent>
          {specialOfferProducts && specialOfferProducts.map((product) =>{ 
            const priceAfterDiscount = parseFloat((product.price - (product.price * product.discountPercentage / 100)).toFixed(2));

            const totalRating = product.reviews.reduce((acc, review) => acc + review.rating, 0);
            const averageRating = totalRating / product.reviews.length;
            
            const fullStars = Math.floor(averageRating);
            const halfStar = averageRating % 1 !== 0;
            let stars = [];

            for (let i = 0; i < fullStars; i++) {
              stars.push(<span key={i} className="star"></span>);
            }
            if (halfStar) {
              stars.push(<span key={fullStars} className="half-star"></span>);
            }
            return (
            <CarouselItem key={product.id} className="basis-[60%] md:basis-[40%] lg:basis-[25%] mx-1">
              <div className="p-1">
                <Card className='bg-background shadow-lg'>
                  <CardContent className="flex flex-col p-3 h-full relative">
                    <div className='bg-white rounded-lg flex items-center justify-center w-full h-[180px]'>
                      <Image src={product.thumbnail} width={250} height={250} alt='product' className=' object-fill'/>
                    </div>                    
                    <div className='py-4 pb-2 px-1 space-y-2'>
                      <h6 className='font-semibold truncate'>{product.title}</h6>
                      <p className='text-xs'>Excel Vendor</p>
                      <div className='pt-2 flex items-center justify-between gap-2'>  
                        <div className='flex items-center gap-2 truncate'>
                          <p className='font-semibold text-primary'>&#8358; {priceAfterDiscount}</p> 
                          <p className='text-xs line-through'>&#8358; {product.price}</p> 
                        </div> 
                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold dark:text-gray-600">{averageRating.toFixed(1)}</span>                        
                      </div>  
                    </div>
                    <span className='absolute top-2 left-0 bg-orange-600 p-1 text-xs font-semibold rounded-r-md text-white'>{product.discountPercentage.toFixed(1)}%</span>                     
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>)
          })}
        </CarouselContent>
        <CarouselPrevious className='left-0 text-bg--foreground'/>
        <CarouselNext className='right-0 text-bg--foreground'/>
      </Carousel>
    </section>
  )
}

export default SpecialOffer
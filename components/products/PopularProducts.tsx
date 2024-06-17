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
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'


const PopularProducts = ({popularProducts, category}: {popularProducts: ProductProps[], category: string }) => {
  return (
    <section className='my-16 max-w-7xl mx-auto'>
      <SectionHeader title="Popular Products" description="We provide best quality & fresh grocery items near your location"/>
      <Carousel className="w-full mt-10 px-3" 
        opts={{
          align: "center",
          loop: false,
      }}>
        <CarouselContent>
          {popularProducts && popularProducts.map((product) =>{ 
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
            <CarouselItem key={product.id} className="basis-[85%] md:basis-[55%] lg:basis-1/3">
              <div className="p-1">
                <Card className='bg-muted'>
                  <CardContent className="flex justify-between p-0 h-[180px] relative">
                    <div className='bg-white rounded-lg flex items-center justify-center w-1/3 m-1'>
                      <Image src={product.thumbnail} width={120} height={120} alt='product' className=''/>
                    </div>                    
                    <div className='p-4 gap-y-2 w-2/3'>
                      <h6 className='font-semibold truncate'>{product.title}</h6>
                      <div className='pt-2'>
                        <p className='text-sm line-through'>&#8358; {product.price}</p>
                        <p className='font-semibold'>&#8358; {priceAfterDiscount}</p>    
                        {stars} 
                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2 py-0.5 text-xs font-semibold dark:text-gray-600">{averageRating.toFixed(1)}</span>
                      </div>                      
                      <div className='flex justify-between items-center'>
                        {product.stock !== 0 ?(
                          <p className='font-normal text-sm'>Stock : <span className='font-semibold'>{product.stock}</span></p>
                        ):(
                          <p className='font-normal text-sm'>Out Of Stock</p>
                        )}
                        
                        <Button variant='outline' className='p-2'>
                          <ShoppingCart  className='text-primary'/>
                        </Button>
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

export default PopularProducts
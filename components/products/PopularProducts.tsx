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
import { ShoppingCart, Eye, Heart } from 'lucide-react'


const PopularProducts = ({popularProducts, category}: {popularProducts: ProductProps[], category: string }) => {
  return (
    <section className='w-full my-16 max-w-6xl mx-auto'>
      <SectionHeader title="Popular Items" description="We provide best quality & fresh grocery items near your location"/>
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
              <CarouselItem
                key={product.id}
                className="basis-[80%] md:basis-[55%] lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="bg-muted group">
                    <CardContent className="flex p-0 h-[180px] relative overflow-hidden">
                      <div className="bg-white dark:bg-gray-300 rounded-lg flex items-center justify-center w-[40%] m-1 flex-shrink-0 overflow-hidden relative">
                        <Image
                          src={product.thumbnail}
                          width={120}
                          height={120}
                          alt="product"
                          className="object-cover hover:scale-125 transition-all"
                        />
                        <div className="inset-0top-1/2 absolute opacity-0 group-hover:opacity-100 transition-opacity space-x-2">
                          <Button variant="outline" size="icon" className="w-8 h-8 bg-gray-100/50 hover:bg-primary border-none">
                            <Eye size={16} className="" />
                          </Button>

                          <Button variant="outline" size="icon" className="w-8 h-8 bg-gray-100/50 hover:bg-primary border-none">
                            <Heart size={16} className="" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 gap-y-2 w-[60%]">
                        <h6 className="font-semibold truncate">
                          {product.title}
                        </h6>
                        <div className="pt-2">
                          <p className="text-sm line-through">
                            &#8358; {product.price}
                          </p>
                          <p className="text-xl text-primary font-bold">
                            &#8358; {priceAfterDiscount}
                          </p>
                          {stars}
                        </div>
                        <div className="flex justify-between items-center">
                          {product.stock !== 0 ? (
                            <p className="font-normal text-sm">
                              Stock :{" "}
                              <span className="font-semibold">
                                {product.stock}
                              </span>
                            </p>
                          ) : (
                            <p className="font-normal text-sm">Out Of Stock</p>
                          )}

                          <Button variant="outline" className="p-2">
                            <ShoppingCart className="text-primary" />
                          </Button>
                        </div>
                      </div>
                      <span className="absolute top-2 left-0 bg-orange-600 p-1 text-xs font-semibold rounded-r-md text-white">
                        {product.discountPercentage.toFixed(1)}%
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className='left-0 text-bg--foreground'/>
        <CarouselNext className='right-0 text-bg--foreground'/>
      </Carousel>
    </section>
  ) 
}

export default PopularProducts
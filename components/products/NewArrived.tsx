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
import { Button } from '../ui/button'
import { ShoppingCart, Eye } from 'lucide-react'

const NewArrived = ({NewProducts, category }: { NewProducts: ProductProps[], category: string }) => {
  return (
    <section className='w-full my-5 max-w-6xl mx-auto'>
      <SectionHeader title="New Arrival"/>
      <Carousel className="w-full mt-3 px-2 py-3" 
        opts={{
          align: "center",
          loop: false,
        }}
      >
        <CarouselContent>
          {NewProducts && NewProducts.map((product) =>{ 
            const priceAfterDiscount = parseFloat((product.price - (product.price * product.discountPercentage / 100)).toFixed(2));
            return (
              <CarouselItem
                key={product.id}
                className="basis-[65%] md:basis-[40%] lg:basis-[25%] mx-1"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col p-3 h-full relative group">
                      <div className="bg-white rounded-lg flex items-center justify-center w-full h-[180px] relative">
                        <Image
                          src={product.thumbnail}
                          width={250}
                          height={250}
                          alt="product"
                          className="w-full h-[200px] object-cover"
                        />
                        <div className="inset-0top-1/2 absolute opacity-0 group-hover:opacity-100 transition-opacity space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 bg-gray-100/50 hover:bg-primary border-none"
                          >
                            <Eye size={16} className="" />
                          </Button>

                          <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 bg-gray-100/50 hover:bg-primary border-none"
                          >
                            <ShoppingCart size={16} className="" />
                          </Button>
                        </div>
                      </div>
                      <div className="py-4 pb-2 px-1 space-y-2">
                        <h6 className="font-semibold truncate">
                          {product.title}
                        </h6>
                        <p className="text-xs">Excel Vendor</p>
                        <div className="pt-2 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 truncate">
                            <p className="font-bold text-primary text-xl">
                              &#8358; {priceAfterDiscount}
                            </p>
                            <p className="text-xs line-through">
                              &#8358; {product.price}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="p-2">
                        <ShoppingCart className="text-primary" />
                      </Button>
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

export default NewArrived
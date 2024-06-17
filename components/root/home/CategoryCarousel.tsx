import * as React from "react"
 
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CarouselSingleItem from "./CarouselSingleItem"

const CategoryCarousel = () => {
  return (
    <section className="w-full my-10 px-2  max-w-7xl m-auto">
      <Carousel opts={{
        loop: true,
        align: "end"
      }}>
          <CarouselPrevious className="left-2 border-none top-4"/>
          <CarouselNext className="right-2 border-none top-4"/>       
          <CarouselContent className="-ml-1 pt-10">
            <CarouselSingleItem
              title = "Food & Snacks"
              desc = "From savory bites to sweet indulgences, find your perfect."
              imgUrl="/category/food.png"
              bgColor="from-yellow-600 dark:from-yellow-900"
            />
            <CarouselSingleItem
              title = "Groceries"
              desc = "Fresh picks, pantry staples, and everything in between."
              imgUrl="/category/grocery.png"
              bgColor="from-orange-600 dark:from-orange-900"
            />
            <CarouselSingleItem
              title = "Health & Drugs"
              desc = "Vital remedies, wellness essentials, and health solutions at your fingertips."
              imgUrl="/category/drugs.jpeg"
              bgColor="from-blue-600 dark:from-blue-950"
            />
            <CarouselSingleItem
              title = "Fashion & Beauty"
              desc = "From trendy outfits to timeless classics, discover the perfect look."
              imgUrl="/category/fashion.jpg"
              bgColor="from-red-600 dark:from-red-900"
            />
            <CarouselSingleItem
              title = "Electronics"
              desc = "From smartphones to smart home devices, find the latest innovations here!"
              imgUrl="/category/electronics.jpg"
              bgColor="from-[#ff4530] dark:from-[#4d0b03]"
            />
            <CarouselSingleItem
              title = "Stationeries"
              desc = "From pens to planners, unleash your creativity with curated stationery collection."
              imgUrl="/category/books.jpg"
              bgColor="from-green-600 dark:from-green-900"
            />
          </CarouselContent>
          <CarouselDots className='py-2'/>
      </Carousel>
    </section>
  )
}

export default CategoryCarousel
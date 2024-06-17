import { CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { cn } from "@/lib/utils"

const CarouselSingleItem = ({...props}) => {
  return (
    <CarouselItem className="pl-1  md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card className={cn("bg-gradient-to-r text-white", props.bgColor)}>
          <CardContent className="flex items-center justify-between p-5">
            <div className='w-1/2'>
              <h3 className='text-lg font-semibold text-nowrap truncate'>{props.title}</h3>
              <p className='text-xs pt-2'>{props.desc}</p>
            </div>
            <Image src={props.imgUrl} width={200} height={200} alt={props.title} className="w-1/2 h-40 rounded-md"/>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  )
}

export default CarouselSingleItem
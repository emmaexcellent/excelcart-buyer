'use client'
import SectionHeader from '../root/SectionHeader'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import StoreSingle from './StoreSingle'


const PopularStore = ({category}: { category: string }) => {
  return (
    <section className='my-16 max-w-7xl mx-auto'>
      <SectionHeader title="Popular Store" />
      <Carousel className="w-full mt-3 px-2 py-3" 
        opts={{
          align: "start",
          loop: true,
        }} 
      >
        <CarouselContent>
          <CarouselItem className="basis-[80%] md:basis-[40%] lg:basis-[30%]">
            <div className="p-1">
            <StoreSingle 
              listType = 'popular'
              logo='/vendors/fsl.png'
              imgUrl='/vendors/fs.png' 
              name='Family Supermarket' 
              status='open'
              address='Arepo titun, Coker town, Ifo.'
              rating={4.2}
              qtySold={55}
            />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-[75%] md:basis-[40%] lg:basis-[25%]">
            <div className="p-1">
            <StoreSingle 
              listType = 'popular'
              logo='/vendors/ssl.png'
              imgUrl='/vendors/ss.png' 
              name='Smart Supermarket' 
              status='open'
              address='Arepo titun, Coker town, Ifo.'
              rating={4.2}
              qtySold={55}
            />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-[75%] md:basis-[40%] lg:basis-[25%]">
            <div className="p-1">
            <StoreSingle 
              listType = 'popular'
              logo='/vendors/eml.png'
              imgUrl='/vendors/em.png' 
              name='EcoMarket' 
              status='open'
              address='Arepo titun, Coker town, Ifo.'
              rating={4.2}
              qtySold={55}
            />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='left-0 text-bg--foreground'/>
        <CarouselNext className='right-0 text-bg--foreground'/>
      </Carousel>
    </section>
  ) 
}

export default PopularStore
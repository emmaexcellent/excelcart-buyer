import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

  const PageHero = ({category}:{category: string}) => {
    
  return (
    <section className='w-full bg-primary/10'>
      {category === 'groceries' && (
        <div className='h-[180px] lg:h-[220px] flex flex-col justify-center items-center capitalize gap-2 mx-auto max-7-xl'>
          <h1 className='font-bold text-base md:text-lg capitalize'>Shop for Fresh Groceries</h1>
          <p className='text-sm pt-2 font-normal'>Get Your Groceries Fast! Swift Delivery Guaranteed.</p>
          <div className='relative w-[90%] md:w-[55%] pt-2'>
            <Input type="text" placeholder="Search for grocery or store..." className='border-0 focus-visible:ring-primary ring-primary border-primary'/>
            <Search width={17} className='absolute top-3 right-3'/>
          </div>
        </div>
      )}

      {category === 'foods' && (
        <div className='h-[180px] flex flex-col justify-center items-center capitalize gap-2 max-w-7xl mx-auto'>
          <h1 className='font-bold text-base md:text-lg uppercase'>Find Your Happiness</h1>
          <p className='text-sm pt-2 font-normal'>Get Your delicious foods! Swift Delivery Guaranteed.</p>
          <div className='relative w-[90%] md:w-[55%] mt-2 p-1.5 bg-primary'>
            <Input type="text" placeholder="Search for foods or restaurants..." className='border-0 focus-visible:ring-primary ring-primary border-primary'/>
            <Search width={17} className='absolute top-3 right-4'/>
          </div>
        </div>
      )}

      {category === 'pharmacy' && (
        <div className='h-[180px] flex flex-col justify-center items-center capitalize gap-2 max-w-7xl mx-auto'>
          <h1 className='font-bold text-base md:text-lg uppercase text-center px-3'>Quality Medicine & Health care at your doorstep.</h1>
          {/* <p className='text-sm pt-2 font-normal'>Get Your medicine ready!! Swift Delivery Guaranteed.</p> */}
          <div className='relative w-[90%] md:w-[55%] mt-2'>
            <Input type="text" placeholder="Search for foods or restaurants..." className='border-0 focus-visible:ring-primary ring-primary border-primary'/>
            <Search width={17} className='absolute top-3 right-4'/>
          </div>
        </div>
      )}

      {category === 'general' && (
        <div className='h-[180px] lg:h-[220px] flex flex-col justify-center items-center capitalize gap-2 max-w-7xl mx-auto'>
          <h1 className='font-bold text-base md:text-lg capitalize text-center px-3'>Exclusive collection for everyone.</h1>
          <p className='text-sm pt-2 font-normal'>Get Your Desired High Qualuty Products Here.</p>
          <div className='relative w-[90%] md:w-[55%] mt-2'>
            <Input type="text" placeholder="Search for products or stores..." className='border-0 focus-visible:ring-primary ring-primary border-primary'/>
            <Search width={17} className='absolute top-3 right-4'/>
          </div>
        </div>
      )}
      
    </section>
  )
}

export default PageHero
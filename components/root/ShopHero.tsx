import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ShopHero = () => {
  return (
    <section className='h-full w-full bg-muted dark:bg-muted/20 relative'>
      <div className='max-w-7xl mx-auto'>
        <Image src="/shop-bg/grocery.jpg" width={400} height={300} alt='shop hero bg' className='hidden absolute w-full h-full top-0 opacity-30'/>
        <div className='w-full flex flex-col justify-center items-center gap-3 p-5 py-7 text-center'>
          <h1 className='font-bold text-base md:text-lg'>Shop for Fresh Groceries</h1>
          <p className='text-xs pt-2 font-normal'>Get Your Groceries Fast! Swift Delivery Guaranteed.</p>
          <div className='relative w-[95%]'>
            <Input type="text" placeholder="Search for grocery or store..." className=''/>
            <Search width={17} className='absolute top-2 right-3'/>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ShopHero
import { Bike, CheckCheck, Package2, SearchCheck, ShoppingCart, Wallet2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BuyingSteps = () => {
  return (
    <section className='max-w-6xl mx-auto w-full my-16'>
      <div className='flex flex-col lg:flex-row items-center'>        
        <Image src='/deliverybike.svg' width={200} height={200} alt='deliver bike' className='w-[80%] lg:w-[40%]'/>
        <div className='w-full'>
          <h2 className='text-xl lg:text-3xl font-bold text-center mb-4 text-primary'>Effortless Shopping</h2>
          <p className='text-sm lg:text-base text-center  mb-6'>Experience seamless steps from selection to delivery.</p>
          <div className='flex flex-col items-center'>
          <div className='flex justify-center gap-5 flex-wrap lg:px-10 w-[85%]'>
            <div className='flex items-center'>
              <SearchCheck className='text-primary pr-1'/>
              <span className='font-semibold text-sm lg:text-base'>Discover</span>
            </div>
            <div className='flex items-center'>
              <ShoppingCart className='text-primary pr-1'/>
              <span className='font-semibold text-sm lg:text-base'>Add To Cart</span>
            </div>
            <div className='flex items-center'>
              <Wallet2 className='text-primary pr-1'/>
              <span className='font-semibold text-sm lg:text-base'>Checkout</span>
            </div>
            <div className='flex items-center'>
              <Package2 className='text-primary pr-1'/>
              <span className='font-semibold text-sm lg:text-base'>Secure Packaging</span>
            </div>
            <div className='flex items-center'>
              <Bike className='text-primary pr-1'/>
              <span className='font-semibold text-sm lg:text-base'>Swift Delivery</span>
            </div>
            <div className='flex items-center'>
              <CheckCheck className='text-primary pr-1'/>
              <span className='font-semibold text-sm lg:text-base'>Delivered & Checked</span>
            </div>
          </div>
        </div>
        </div>
        
      </div>

    </section>
  )
}

export default BuyingSteps
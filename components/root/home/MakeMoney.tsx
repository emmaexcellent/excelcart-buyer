import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const MakeMoney = () => {
  return (
    <section className='max-w-7xl m-auto w-full my-10 pt-5'>
      <h3 className='text-xl lg:text-2xl font-bold text-center px-3'>Start Earning With <span className='text-primary'>Excelcart</span></h3>
      <p className='text-center text-xs lg:text-sm mt-2 px-3'>Join Excelcart today and unlock unlimited earning potential where you are empowered to thrive in the online marketplace.</p>
      <div className='my-5 flex flex-col lg:flex-row justify-center gap-5 lg:gap-5 lg:mx-5 px-5'>
        <Card className='flex flex-col justify-between items-center p-4 bg-orange-100 dark:bg-orange-950 lg:w-1/2'>
          <Image src='/seller.svg' width={200} height={200} alt='seller'className='w-36'/>
          <div className='text-center py-3 flex flex-col items-center gap-5'>
            <div className='px-6'>
              <h5 className='font-semibold text-xl'>Become a Seller</h5>
              <p className='text-sm mt-1'>Register as seller & open shop in Excelcart to start your business.</p>
            </div>
          <Button className='text-base w-36'>Register Shop</Button>
          </div>          
        </Card>
        <Card className='flex flex-col justify-between items-center p-4 bg-green-100 dark:bg-green-950 lg:w-1/2'>
          <Image src='/delivery-man.svg' width={200} height={200} alt='seller'className='w-36'/>
          <div className='text-center py-3 flex flex-col items-center gap-5'>
            <div className='px-6'>
              <h5 className='font-semibold text-xl'>Become a Delivery Man</h5>
              <p className='text-sm mt-1'>Register as delivery man and earn money.</p>
            </div>
          <Button className='text-base w-32'>Register</Button>
          </div>
          
        </Card>
      </div>
    </section>
  )
}

export default MakeMoney
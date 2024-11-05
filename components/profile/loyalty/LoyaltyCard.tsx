import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const LoyaltyCard = () => {
  return (
    <div className='space-y-5 md:w-1/2 lg:w-full'>
      <div className='rounded-[4rem] bg-[#03955f] w-full h-40 py-1 shadow-lg'>
        <div className='flex justify-between items-center'>
          <div className='text-background m-6'>
            <span>Total points</span>
            <p className='text-3xl font-semibold'>0</p>
            {/* <Button variant='link' size='sm' className='text-white underline'>Convert to Wallet Money</Button> */}
          </div>
          <div className='m-2 p-4 rounded-full bg-primary/30'>
            <Image src='/profile/champ.png' width={100} height={100} alt='loyalty'/>
          </div>
        </div>      
      </div>
      <div className='w-full flex justify-center'>
        <Button>Convert to Wallet Money</Button>
      </div>
    </div>
  )
}

export default LoyaltyCard
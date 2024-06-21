import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'

const WalletCard = () => {
  return (
    <div className='rounded-[3rem] bg-[#03955f] w-full h-48 py-1 shadow-lg md:w-1/2 lg:w-full'>
      <div className='flex justify-between items-center p-2 pb-0'>
        <Image src='/wallet/wallet.webp' width={100} height={100} alt='wallet' />
        <Button variant='link' className='text-gray-100 font-semibold'>
          Add fund <Plus className='rounded-full text-primary bg-gray-200 ml-2 p-1'/>
        </Button>
      </div>
      <div className='p-2 pt-0 mx-5 text-gray-900'>
        <p className='inline-flex pb-1'>Total Balance</p>
        <p className='font-bold text-2xl'>&#8358; 100.00</p>
      </div>
    </div>
  )
}

export default WalletCard
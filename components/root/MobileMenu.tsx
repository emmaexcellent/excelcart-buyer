import { BaggageClaim, Heart, Home,  MessageSquare,  ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MobileMenu = () => {
  return (
    <div className='md:hidden w-full sticky bottom-0 bg-background p-2 px-5 font-semibold rounded-t-xl shadow-inner shadow-primary z-30'>
      <ul className='flex text-xs justify-between p-3'>
        <li>
          <Link href='/' className='flex flex-shrink-0 flex-col items-center cursor-pointer hover:text-primary'>
            <Home width={20} height={20} fill='#0000'/><span>Home</span>
          </Link>
        </li> 
        <li>
          <Link href='/' className='flex flex-shrink-0 flex-col items-center cursor-pointer hover:text-primary'>
            <BaggageClaim width={20} height={20}/><span>My Orders</span>
          </Link>
        </li>
        <li className='relative'>
          <Link href='/' className='flex flex-shrink-0 flex-col items-center cursor-pointer hover:text-primary'>
            <ShoppingCart width={20} height={20}/><span>Cart</span>
          </Link>
        </li>
        <li className='relative'>
          <Link href='/' className='flex flex-shrink-0 flex-col items-center cursor-pointer hover:text-primary'>
            <MessageSquare width={20} height={20}/><span>Chat</span>
          </Link>
        </li>
        <li className='relative'>
          <Link href='/' className='flex flex-shrink-0 flex-col items-center cursor-pointer hover:text-primary '>
            <Heart width={20} height={20}/><span>Wishlist</span>
          </Link>
        </li>           
      </ul>
    </div>
  )
}

export default MobileMenu
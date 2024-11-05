'use client'
import NoData from '@/components/NoData'
import React, { useState } from 'react'

const OrderList = () => {
  const [ value, setValue] = useState('')

  return (
    <div>
      <ul className='flex gap-5 text-sm font-semibold'>
        <li 
          onClick={() => setValue('pending')}
          className={`${value==='pending' ? 'underline underline-offset-8 text-primary':'text-gray-300'}`}
        >
          Pending
        </li>
        <li 
          onClick={() => setValue('delivered')}
          className={`${value==='delivered' ? 'underline underline-offset-8 text-primary':'text-gray-300'}`}
        >
          Delivered
        </li>
      </ul>
      <NoData/>
    </div>
  )
}

export default OrderList
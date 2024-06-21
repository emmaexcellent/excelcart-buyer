import Image from 'next/image'
import React from 'react'

const NoData = () => {
  return (
    <div className='flex justify-center mt-10'>
      <Image src='/no-data.svg' width={200} height={200} alt='no data' className='opacity-60'/>
    </div>
  )
}

export default NoData
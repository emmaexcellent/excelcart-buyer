import React from 'react'

const WalletInfoSingle = ({info}:{info:string}) => {
  return (
    <div className='flex items-center gap-5 text-xs'>
      <span className='w-2 h-2 rounded-full border-2 border-primary'></span>
      <p className='font-normal'>{info}</p>
    </div>
  )
}

export default WalletInfoSingle
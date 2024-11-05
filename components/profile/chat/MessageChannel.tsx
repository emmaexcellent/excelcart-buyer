import Image from 'next/image'
import React from 'react'

const MessageChannel = ({...channel}) => {
  return (
    <div className="flex items-center gap-3 pt-7" onClick={channel.onClick}>
      <div className='relative w-10 h-10 rounded-full overflow-hidden border border-primary'>
        <Image src={channel.logo} width={80} height={80} alt="logo" className='absolute inset-0 w-full h-full object-contain rounded-full'/>
      </div>            
      <p className='font-semibold text-sm truncate w-36'>{channel.name}</p>
    </div>
  )
}

export default MessageChannel
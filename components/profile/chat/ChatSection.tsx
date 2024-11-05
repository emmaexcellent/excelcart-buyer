'use client'
import React, { useState } from 'react'
import MessageLeftSide from '@/components/profile/chat/MessageLeftSide';
import MessageMain from '@/components/profile/chat/MessageMain';

const ChatSection = () => {
  const [channel, setChannel] = useState('');
  console.log(channel)

  return (
    <div className='flex'>
      <MessageLeftSide setChannel = {setChannel}/>
      <MessageMain channel ={channel}/>
    </div>
  )
}

export default ChatSection
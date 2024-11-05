'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Input } from '../../ui/input';
import MessageChannel from './MessageChannel';

const MessageLeftSide = (
  {setChannel}:
  {
    setChannel: React.Dispatch<React.SetStateAction<string>>
  }) => {

  const [selectedTab, setSelectedTab] = useState('vendor');

  return (
    <div className="w-[30%] p-5 pl-2 border-r h-full">
      <div className='flex-grow overflow-y-auto mb-4 p-2' style={{ maxHeight: '70vh' }}>
        <h4 className="font-bold text-lg pt-3">Messages</h4>
        <div className='py-7'>
          <Input placeholder='Search'className="border-primary w-[80%]" />
          <MessageChannel logo='/vendors/fsl.png' name='Excelcart Help & Support'/>
          <div className="inline-flex gap-16 font-semibold py-8 text-gray-600 dark:text-gray-400 text-sm">
            <div onClick={() => setSelectedTab('vendor')} className={`cursor-pointer ${selectedTab === 'vendor' ? 'text-primary' : ''}`}>
              <p>Vendor</p>
              <div className={`w-12 ${selectedTab === 'vendor' ? 'bg-primary' : 'bg-transparent'} h-1 rounded-full mt-1`}></div>
            </div>
            <div onClick={() => setSelectedTab('courier')} className={`cursor-pointer ${selectedTab === 'courier' ? 'text-primary' : ''}`}>
              <p>Courier</p>
              <div className={`w-10 ${selectedTab === 'courier' ? 'bg-primary' : 'bg-transparent'} h-1 rounded-full mt-1`}></div>
            </div>
          </div>
          <div>
            {selectedTab === 'vendor' && (
              <div className='space-y-3'>
                <div className="flex items-center gap-3 pt-7 cursor-pointer" onClick={() => setChannel('help')}>
                  <div className='relative w-10 h-10 rounded-full overflow-hidden border border-primary'>
                    <Image src='/vendors/fsl.png' width={80} height={80} alt="logo" className='absolute inset-0 w-full h-full object-contain rounded-full'/>
                  </div>            
                  <p className='font-semibold text-sm truncate w-36'>Excelcart Support & Help</p>
                </div>
              </div>
            )}
            {selectedTab === 'courier' && (
              <div>
                {/* Render Courier messages here */}
                <p>Courier Messages</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
      
      
  );
};

export default MessageLeftSide;

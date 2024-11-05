'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ImagePlus, SendHorizonal, SmilePlus } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const initialMessages = [
  { id: 1, sender: 'Vendor A', content: 'Hello, how can I help you?' },
  { id: 2, sender: 'Courier B', content: 'I need assistance with my delivery.' },
  { id: 3, sender: 'Vendor A', content: 'Sure, what do you need help with?' },
  { id: 4, sender: 'Courier B', content: 'I have a problem with the package.' },
];

// Dynamically import the EmojiPicker component
const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });

const MessageMain = ({ channel }: { channel: string }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [showStickerModal, setShowStickerModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageInput, setImageInput] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', content: newMessage }]);
      setNewMessage('');
    }
  };

  const handleReply = (message: { id?: number; sender: any; content?: string; }) => {
    setNewMessage(message.sender);
  };

  const handleDelete = (id: number) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  const handleEmojiClick = (event, emojiObject) => {
    setMessages([...messages, { id: messages.length + 1, sender: 'You', content: emojiObject.emoji }]);
    setShowStickerModal(false);
  };

  const handleAddImage = () => {
    if (imageInput.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'You', content: <Image src={imageInput} alt="Image" width={150} height={150} /> }]);
      setImageInput('');
      setShowImageModal(false);
    }
  };

  return (
    <div className='w-[70%] bg-muted/30 p-4 flex flex-col'>
      {channel ? (
        <>
          <div className="flex items-center gap-3 py-3">
            <div className='relative w-20 h-20 rounded-full overflow-hidden border border-primary'>
              <Image src='/vendors/fsl.png' width={85} height={85} alt="logo" className='absolute inset-0 w-full h-full object-contain rounded-full' />
            </div>
            <div>
              <p className='font-semibold'>Excelcart Support & Help</p>
              <p>Admin</p>
            </div>
          </div>
          <div className='flex-grow overflow-y-auto mb-4 p-2 pt-7 max-h-[50vh]'>
            {messages.map(message => (
              <div key={message.id} className='mb-4'>
                <div className='flex justify-between items-start'>
                  <div>
                    <span className='font-semibold'>{message.sender}:</span>
                    <span>{message.content}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => handleReply(message)}
                      className='text-blue-500 mr-2 hover:underline'
                    >
                      Reply
                    </button>
                    <button
                      onClick={() => handleDelete(message.id)}
                      className='text-red-500 hover:underline'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center relative">
            <Input
              type="text"
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              className="h-20 placeholder:font-semibold pr-20"
              placeholder="Send message..."
            />
            <div className='absolute right-3 text-gray-500 font-semibold flex items-center gap-4'>
              <ImagePlus onClick={() => setShowImageModal(true)} className="cursor-pointer" />
              <SmilePlus onClick={() => setShowStickerModal(true)} className="cursor-pointer" />
              <SendHorizonal onClick={handleSendMessage} className="cursor-pointer" />
            </div>
          </div>

          {showStickerModal && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-4 rounded shadow-lg'>
                <h2 className='text-lg font-semibold mb-2'>Add a Sticker</h2>
                <EmojiPicker onEmojiClick={handleEmojiClick} />
                <div className='flex justify-end mt-4'>
                  <button onClick={() => setShowStickerModal(false)} className='bg-gray-500 text-white px-4 py-2 rounded'>Close</button>
                </div>
              </div>
            </div>
          )}

          {showImageModal && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
              <div className='bg-white p-4 rounded shadow-lg'>
                <h2 className='text-lg font-semibold mb-2'>Add an Image</h2>
                <input
                  type='text'
                  value={imageInput}
                  onChange={e => setImageInput(e.target.value)}
                  className='border p-2 mb-4 w-full'
                  placeholder='Enter image URL'
                />
                <div className='flex justify-end'>
                  <button onClick={handleAddImage} className='bg-blue-500 text-white px-4 py-2 rounded mr-2'>Add</button>
                  <button onClick={() => setShowImageModal(false)} className='bg-gray-500 text-white px-4 py-2 rounded'>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className='flex flex-col justify-center flex-grow overflow-y-auto mb-4 p-2' style={{ height: '50vh' }}>
          <div className='w-full flex justify-center'>
            <Image src='/no-message.svg' width={200} height={200} alt='No Message Selected!' />
          </div>
          <div className="text-gray-500 text-center">
            <p className="font-semibold">
              Currently, you don't have any message selected.
            </p>
            <p className="text-xs">
              Choose from one of the existing messages, or start a new one.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageMain;

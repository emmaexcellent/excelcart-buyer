'use client';

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

interface Message {
  id: number;
  sender: string;
  content: string | JSX.Element;
}

const MessageMain = ({ channel }: { channel: string }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>('');
  const [showStickerModal, setShowStickerModal] = useState<boolean>(false);
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [imageInput, setImageInput] = useState<string>('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: 'You', content: newMessage },
      ]);
      setNewMessage('');
    }
  };

  const handleReply = (sender: string) => {
    setNewMessage(`@${sender} `);
  };

  const handleDelete = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const handleEmojiClick = (emojiObject: { emoji: string }) => {
    setNewMessage(newMessage + emojiObject.emoji);
    setShowStickerModal(false);
  };

  const handleAddImage = () => {
    if (imageInput.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'You',
          content: (
            <Image
              src={imageInput}
              alt="User uploaded"
              width={150}
              height={150}
              className="rounded"
            />
          ),
        },
      ]);
      setImageInput('');
      setShowImageModal(false);
    }
  };

  return (
    <div className="w-[70%] bg-muted/30 p-4 flex flex-col">
      {channel ? (
        <>
          <div className="flex items-center gap-3 py-3">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border border-primary">
              <Image
                src="/vendors/fsl.png"
                width={85}
                height={85}
                alt="Excelcart Logo"
                className="absolute inset-0 w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold">Excelcart Support & Help</p>
              <p className="text-sm">Admin</p>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto mb-4 p-2 pt-7 max-h-[50vh]">
            {messages.map((message) => (
              <div key={message.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-semibold">{message.sender}: </span>
                    <span>{message.content}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => handleReply(message.sender)}
                      className="text-blue-500 mr-2 hover:underline"
                      aria-label="Reply"
                    >
                      Reply
                    </button>
                    <button
                      onClick={() => handleDelete(message.id)}
                      className="text-red-500 hover:underline"
                      aria-label="Delete"
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
              onChange={(e) => setNewMessage(e.target.value)}
              className="h-20 placeholder:font-semibold pr-20"
              placeholder="Send message..."
            />
            <div className="absolute right-3 text-gray-500 font-semibold flex items-center gap-4">
              <ImagePlus
                onClick={() => setShowImageModal(true)}
                className="cursor-pointer"
                aria-label="Add Image"
              />
              <SmilePlus
                onClick={() => setShowStickerModal(true)}
                className="cursor-pointer"
                aria-label="Add Emoji"
              />
              <SendHorizonal
                onClick={handleSendMessage}
                className="cursor-pointer"
                aria-label="Send Message"
              />
            </div>
          </div>

          {showStickerModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-lg font-semibold mb-2">Add a Sticker</h2>
                <EmojiPicker
                  onEmojiClick={(emojiData) => handleEmojiClick(emojiData)}
                />
                <div className="flex justify-end mt-4">
                  <Button onClick={() => setShowStickerModal(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}

          {showImageModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-lg font-semibold mb-2">Add an Image</h2>
                <Input
                  type="text"
                  value={imageInput}
                  onChange={(e) => setImageInput(e.target.value)}
                  placeholder="Enter image URL"
                />
                <div className="flex justify-end mt-4">
                  <Button onClick={handleAddImage} className="mr-2">
                    Add
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setShowImageModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col justify-center items-center flex-grow">
          <Image
            src="/no-message.svg"
            width={200}
            height={200}
            alt="No Message Selected"
          />
          <div className="text-gray-500 text-center">
            <p className="font-semibold">No message selected.</p>
            <p className="text-sm">Select a message or start a new one.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageMain;

'use client'
import React from 'react';
import { Copy } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ReferCode = () => {
  const referralCode = "UHU789HGF";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralCode).then(() => {
      toast({
        description: "Referral code copied to clipboard!",
      })
    }).catch(err => {
      console.error("Failed to copy code: ", err);
    });
  };

  return (
    <div className='w-full'>
      <div className='border border-dashed border-primary/50 h-12 rounded-lg flex justify-between items-center py-2 px-3 text-primary font-semibold'>
        <p className="cursor-text">{referralCode}</p>   
        <Copy className="text-primary cursor-pointer" onClick={handleCopyClick}/>             
      </div>
    </div>
  )
}

export default ReferCode;

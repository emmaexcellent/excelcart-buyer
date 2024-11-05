'use client'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ShareBtns = ({ url, title }: {url: string, title: string}) => {
  const handleShare = (platform: string) => {
    let shareUrl = '';

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`;
        break;
      case 'reddit':
        shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };
  return (
    <div className="w-full flex items-center justify-center space-x-4">
      <Image src='/social/facebook.svg' width={30} height={30} alt='Share on Facebook' onClick={() => handleShare('facebook')} />

      <Image src='/social/twitter.svg' width={30} height={30} alt='Share on Twitter' onClick={() => handleShare('twitter')} />

      <Image src='/social/linkedin.svg' width={30} height={30} alt='Share on LinkedIn' onClick={() => handleShare('linkedin')} />

      <Image src='/social/whatsapp.svg' width={32} height={32} alt='Share on WhatsApp' onClick={() => handleShare('whatsapp')} />

      <Image src='/social/email.svg' width={30} height={30} alt='Share on Email' onClick={() => handleShare('email')} />
    </div>
  )
}

export default ShareBtns
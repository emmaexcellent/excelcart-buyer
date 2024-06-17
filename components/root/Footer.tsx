import Image from 'next/image'
import Link from 'next/link'
import FacebookSvg from '../../public/social/facebook.svg'
import InstagramSvg from '../../public/social/instagram.svg'
import TwitterSvg from '../../public/social/twitter.svg'
import LinkedinSvg from '../../public/social/linkedin.svg'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <footer className='w-full mt-12 my-5'>
      <div className='lg:flex items-start'>        
        <div className='flex flex-col items-center lg:items-start p-5 gap-3 lg:gap-6 px-10'>
          <Image src="/logo.png" width={150} height={30} alt="Excelcart logo"/>
          <p className='text-lg text-center lg:text-start'>Connect with us on our social media to keep up to date.</p>
          <ul className="inline-flex gap-8 p-2">
            <li>
              <Link href='/'>
                <FacebookSvg/>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <InstagramSvg/>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <TwitterSvg/>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <LinkedinSvg/>
              </Link>
            </li>          
          </ul>
        </div>
        <div className='w-full mr-5 bg-primary/10 p-8 rounded-t-xl text-sm lg:flex items-center justify-between'>
          <div className='flex justify-between gap-5 text-start lg:w-[60%]'>
            <ul className='space-y-3 lg:space-y-6 lg:text-lg'>
              <li>
                <Link href='/' className='hover:text-primary hover:underline-offset-4'>About Us</Link>
              </li>
              <li><Link href='/' className='hover:text-primary hover:underline-offset-4'>Help & Support</Link>
              </li>
              <li>
                <Link href='/' className='hover:text-primary hover:underline-offset-4'>Register Your Store</Link>
              </li>
              <li>
                <Link href='/' className='hover:text-primary hover:underline-offset-4'>Become a Delivery Man</Link>
              </li>
              <li>
                <Link href='/' className='hover:text-primary hover:underline-offset-4'>Track Order</Link>
              </li>
            </ul>
            <ul className='space-y-3 lg:space-y-6 lg:text-lg'>
              <li>
                <Link href='/'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/' className='hover:text-primary hover:underline-offset-4'>Terms & Conditions</Link>
              </li>
              <li>
                <Link href='/' className='hover:text-primary hover:underline-offset-4'>Refund Policy</Link>
              </li>
              <li>
                <Link href='/' className='hover:text-primary hover:underline-offset-4'>Shipping Policy</Link>
              </li>
              <li>
                <Link href='/' className='hover:text-primary hover:underline-offset-4'>Return Policy</Link>
              </li>
            </ul> 
          </div>
          <ul className='w-full flex lg:flex-col justify-center gap-5 items-center text-center flex-wrap py-8 lg:py-0 lg:w-[40%]'>
            <li className='flex flex-col items-center justify-center gap-1'>
              <Link href=''>
                <Image src='/footer/mail.svg' width={50} height={50} alt='email-us'/>              
              </Link>
              <p>
                Send Us Mails</p>
                <span>support@excelcart.com.ng</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1'>
              <Link href=''>
                <Image src='/footer/call.svg' width={50} height={50} alt='email-us'/>              
              </Link>
              <p>
                Contact Us</p>
                <span className='text-xs'>+234 903 292 9196</span>
            </li>
            <li className='flex flex-col items-center justify-center gap-1'>
              <Link href=''>
                <Image src='/footer/map.svg' width={50} height={50} alt='email-us'/>              
              </Link>
              <p>
                Locate Us</p>
              <span className='text-xs'>OOU Ibogun Campus Ogun State Nigeria.</span>
            </li>
          </ul>
        </div>      
      </div>
      <p className='text-normal lg:text-lg pt-5 text-center'>@ Excelcart 2024</p>
    </footer>
  )
}

export default Footer
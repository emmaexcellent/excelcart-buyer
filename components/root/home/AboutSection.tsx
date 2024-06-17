import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='w-full my-10 bg-white dark:bg-black'>
      <div className='max-w-7xl m-auto flex flex-col lg:flex-row justify-center items-center py-5 rounded-none lg:gap-10 px-4 lg:px-0'>
        <div className='lg:order-last lg:w-1/3'>
          <Image src='/delivery.svg' width={400} height={400} alt=''/>
        </div>
        <div className='space-y-3 lg:w-1/2'>
          <h1 className="text-2xl font-bold text-primary">Excelcart</h1>
          <p>At ExcelCart, we're dedicated to revolutionizing your online shopping experience. Our platform offers a seamless marketplace where students and professionals alike can buy, sell, and even become couriers to earn extra income.</p>
          <div className="flex justify-center lg:justify-start pt-5">
            <Button className='text-white  font-semibold'>Get Started</Button>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default AboutSection
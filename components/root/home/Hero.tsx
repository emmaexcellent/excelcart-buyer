import Image from 'next/image';
import React from 'react';
import SelectCampusForm from './SelectCampusForm';
import { getCampusList } from "@/lib/actions/campus.actions"
// import { Button } from '@/components/ui/button';
// import SelectCategoryPopup from './SelectCategoryPopup';

const Hero = async () => {
  const campusList = await getCampusList();
  return (
    <section className='w-full max-w-6xl mx-auto p-4 py-8 md:p-8 rounded-t-lg bg-muted'>
      <div className='w-full lg:grid grid-cols-2 items-center gap-5 lg:gap-10 max-w-7xl m-auto'>
        <div className='lg:w-full text-center lg:text-left'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold lg:!leading-relaxed'>Excelcart, Your Ultimate Campus Shopping.</h1>
          <p className='font-normal py-5'>Elevate Your Campus Shopping Experience. Browse, Bargain, and Bring it Home with Ease!</p>
          <SelectCampusForm campusList={campusList}/>
        </div>
        <div className='flex overflow-hidden items-center relative py-3'>
          <div className='relative mb-4 md:mb-0 w-[85%] h-44 md:h-[20rem] lg:h-[25rem]'>
            <Image src='/heronew.jpeg' width={450} height={300} priority alt='hero' className='w-full absolute rounded-xl shadow -left-5'/>
          </div>
          <Image src='/herophone.png' width={250} height={350} alt='hero' className='absolute  right-0 w-60 bottom-0 shadow rounded-3xl'/>
        </div>
      </div>      
    </section>
  );
};

export default Hero;

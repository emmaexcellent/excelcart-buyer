"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'; 
import React from 'react'

const ShopCategory = ({ ...props }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(props.path);
  };

  return (
    <>
      <div className="transition basis-1/3 max-w-[33.333%] pt-2 pl-2 hover:-translate-y-1 hover:scale-95 cursor-pointer" onClick={handleClick}>
        <div className="rounded-lg p-4 shadow-md transition-shadow duration-300 hover:shadow-primary border">
          <div className="flex flex-col items-center w-full justify-center">
            <div className="inline-flex bg-transparent h-10 w-10 md:w-16 md:h-16 relative">
              <Image src={props.imgUrl} width={250} height={250} alt={props.shopName} />
            </div>
            <p className="my-2 text-sm font-medium text-ellipsis  text-center">{props.shopName}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopCategory;

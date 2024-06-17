import { formatDate } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card, CardHeader } from "../ui/card"
import Image from "next/image"



const TopProfileDetails = ({user}: LoggedInUserProps) => {
  
  return (
    <section className='w-full'>
      <div className="m-2">
        <div className='flex items-center p-3 gap-5 bg-primary/10 rounded-xl'>
          <Avatar className='w-[120px] h-[120px] border border-primary'>
            <AvatarImage src="https://githu.com/shadn.png" alt="@shadcn" />
            <AvatarFallback className='uppercase font-semibold text-2xl text-primary'>{user.name.substring(0,2)}</AvatarFallback>
          </Avatar>
          <div className=''>
            <h2 className='font-bold text-xl'>{user.name}</h2>
            <p>Joined {formatDate(user.registration)}</p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3 py-3'>
          <Card className="shadow-md">
            <div className='flex flex-col gap-1 items-center p-3'>
              <Image src='/profile/wallet.svg' height={35} width={35} alt='wallet'/>
              <p className="text-primary font-semibold">35</p>
              <p className='text-sm'>Total Orders</p>
            </div>
          </Card>
          <Card className="shadow-md">
            <div className='flex flex-col gap-1 items-center p-3'>
              <Image src='/profile/order.svg' height={35} width={35} alt='wallet'/>
              <p className="text-primary font-semibold">35</p>
              <p className='text-sm'>Total Orders</p>
            </div>
          </Card>
          <Card className="shadow-md">
            <div className='flex flex-col gap-1 items-center p-3'>
              <Image src='/profile/loyalty.svg' height={35} width={35} alt='wallet'/>
              <p className="text-primary font-semibold">35</p>
              <p className='text-sm'>Loyalty Points</p>
            </div>
          </Card>
          <Card className="shadow-md">
            <div className='flex flex-col gap-1 items-center p-3'>
              <Image src='/profile/wishlist.svg' height={35} width={35} alt='wallet'/>
              <p className="text-primary font-semibold">20</p>
              <p className='text-sm'>Wishlist</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default TopProfileDetails
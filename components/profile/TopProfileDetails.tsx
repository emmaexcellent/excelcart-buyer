"use client"
import { formatDate } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Card } from "../ui/card"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"


const topCardDetails = [
  {
    name: 'wallet',
    title: 'Amount In Wallet',
    link: '/profile/wallet',
    img: '/profile/wallet.svg',
    number: 20,
  },
  {
    name: 'order',
    title: 'Total Orders',
    link: '/profile/orders',
    img: '/profile/order.svg',
    number: 30,
  },
  {
    name: 'loyalty',
    title: 'Loyalty Points',
    link: '/profile/loyalty',
    img: '/profile/loyalty.svg',
    number: 35,
  },
  {
    name: 'wishlist',
    title: 'Wishlist',
    link: '/profile/wishlist',
    img: '/profile/wishlist.svg',
    number: 30,
  }
]

const TopProfileDetails = ({user}: LoggedInUserProps) => {
  const router = useRouter()
  const pathname = usePathname()
  
  return (
    <section className='w-full max-w-7xl m-auto'>
      <div className="m-5 lg:flex gap-5">
        <div className='lg:w-[30%] flex items-center p-3 gap-5 bg-primary/10 rounded-xl'>
          <Avatar className='w-[110px] h-[110px] border'>
            <AvatarImage src="https://githu.com/shadn.png" alt="@shadcn" />
            <AvatarFallback className='uppercase font-semibold text-2xl text-primary'>{user.name.substring(0,2)}</AvatarFallback>
          </Avatar>
          <div className=''>
            <h2 className='font-bold text-xl'>{user.name}</h2>
            <p className="text-sm">Joined {formatDate(user.registration)}</p>
          </div>
        </div>
        <div className={`${pathname == '/profile'? '':'hidden lg:grid lg:grid-cols-4'} grid grid-cols-2 lg:grid-cols-4 gap-5 py-5 lg:w-[70%]`}>
          {topCardDetails.map((card) => (
            <Card key={card.name} className="hover:border hover:drop-shadow-md hover:border-primary cursor-pointer" onClick={() => router.push(card.link)}>
              <div className='flex flex-col gap-1 items-center py-5 px-3'>
                <Image src={card.img} height={35} width={35} alt={card.name}/>
                <p className="text-primary font-semibold">{`${card.name === 'wallet' ? '$':''}`} {card.number}</p>
                <p className='text-sm'>{card.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopProfileDetails
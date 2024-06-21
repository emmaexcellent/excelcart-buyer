'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const profileLinks = [
  {
    title: 'Profile',
    href: '/profile',
  },
  {
    title: 'My Orders',
    href: '/profile/orders',
  },
  {
    title: 'Wallet',
    href: '/profile/wallet',
  },
  {
    title: 'Coupons',
    href: '/profile/coupons',
  },
  {
    title: 'Loyalty Points',
    href: '/profile/loyalty',
  },
  {
    title: 'Chat',
    href: '/profile/chat',
  },

]

const MainSection = ({
  children,
}: {
    children: React.ReactNode;
  }) => {
    const path = usePathname()

  return (
    <section className='w-full'>
      <div className='p-5 rounded-xl bg-muted m-5'>
        <div className="hidden lg:block">          
          <ul className='flex items-center gap-10 pb-2 px-5 font-semibold text-gray-400 text-sm'>
            {profileLinks.map((link)=>
              <li className={`${path === link.href && 'bg-primary/5 text-primary'} hover:bg-primary/5 hover:text-primarybg-primary/5 hover:text-primary p-2 cursor-pointer rounded-md`}>
                <Link href={link.href}>
                  {link.title}
                </Link>
              </li>
            )}
            
          </ul>
          <div className='h-[0.15rem] w-full bg-primary opacity-30 mb-5'></div>
        </div>
        {children}
      </div>
    </section>
  )
}

export default MainSection
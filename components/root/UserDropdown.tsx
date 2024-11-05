'use client'
import {
  BadgeCent,
  BaggageClaim,
  Bike,
  CreditCard,
  HandCoins,
  LogOut,
  MessageSquareText,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { logoutUser } from "@/lib/actions/auth.actions"

export function UserDropdown({user}: LoggedInUserProps) {
  const router = useRouter()
  const path = usePathname()

  const handleLogout = async () => {
    await logoutUser()
    router.push('/auth/sign-in')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link"><User/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-5">
        <DropdownMenuLabel>Hello, {user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem className={`hover:bg-primary/20 ${path==='/profile'?'bg-primary/20':''}`}>
            <Link href='/profile' className='flex items-center'>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className={`hover:bg-primary/20 ${path==='/profile/orders'?'bg-primary/20':''}`}>
            <Link href='/profile/orders' className='flex items-center'>
              <BaggageClaim className="mr-2 h-4 w-4" />
              <span>Orders</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className={`hover:bg-primary/20 ${path==='/profile/wallet'?'bg-primary/20':''}`}>
            <Link href='/profile/wallet' className='flex items-center'>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Wallet</span>
            </Link>
          </DropdownMenuItem>          
          <DropdownMenuItem className={`hover:bg-primary/20 ${path==='/profile/chat'?'bg-primary/20':''}`}>
            <Link href='/profile/chat' className='flex items-center'>
              <MessageSquareText className="mr-2 h-4 w-4" />
              <span>Chat</span>
            </Link>
          </DropdownMenuItem>          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem className={`hover:bg-primary/20 ${path==='/profile/coupons'?'bg-primary/20':''}`}>
            <Link href='/profile/coupons' className='flex items-center'>
              <BadgeCent className="mr-2 h-4 w-4" />
              <span>Coupons</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className={`hover:bg-primary/20 ${path==='/profile/loyalty'?'bg-primary/20':''}`}>
            <Link href='/profile/loyalty' className='flex items-center'>
              <HandCoins className="mr-2 h-4 w-4" />
              <span>Loyalty Points</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className={`hover:bg-primary/20 ${path==='/profile/referrals'?'bg-primary/20':''}`}>
            <Link href='/profile/referrals' className='flex items-center'>
              <Users className="mr-2 h-4 w-4" />
              <span>Referrals</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem className={`hover:bg-primary/20 ${path==='/profile/track-order'?'bg-primary/20':''}`}>
            <Link href='/profile/track-order' className='flex items-center'>
              <Bike className="mr-2 h-4 w-4" />
              <span>Track Order</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>          
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

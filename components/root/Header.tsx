import { Unlock, Phone, User2, User, Menu } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ThemeToggle } from '../theme-toggle'
import Link from 'next/link'
import { getLoggedInUser } from '@/lib/actions/auth.actions'
import { UserDropdown } from './UserDropdown'

const Header = async () => {
  // {loggedInUser}:{loggedInUser: Models.User<Models.Preferences> | null}

  const loggedInUser = await getLoggedInUser();

  // <Await promise={loggedInUserPromise}>
  //   {(user) => 
  //     <ShopCategory subCategoryList={subcategories}/>
  //   }          
  // </Await>

  return (
    <header className="w-full bg-background sticky top-0 z-10 p-3 shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl m-auto">
        <Link href="/">
          <Image src="/logo.png" width={100} height={25} alt="Excelcart logo" />
        </Link>
        {!loggedInUser ? (
          <div className="flex justify-between">
            <ThemeToggle />
            <Link href="/auth/sign-in" className="flex">
              <Button size="sm" className="text-white font-semibold">
                <Unlock width={18} className="pr-1 hidden sm:block" /> Sign In
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-between">
            <ThemeToggle />
            <UserDropdown user={loggedInUser} />
            <Button size="icon" variant="link">
              <Menu />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header
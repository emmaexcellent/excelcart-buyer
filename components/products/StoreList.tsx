'use client'
import { Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react'
import StoreSingle from './StoreSingle'

const StoreList = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <section className='my-10 max-w-7xl mx-auto'>
      <div className='flex items-center justify-between p-5 py-3 bg-muted'>
        <h5 className='text-xl font-semibold'>14 Groceries Store</h5>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size='icon' variant="outline" className='border-primary ring-0'> 
              <Filter className='text-primary'/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-5 font-semibold">
            <DropdownMenuLabel>Filter</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="top">Top Rated</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="new">Newly Joined</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="popular">Popular</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-3'>
        <StoreSingle 
          imgUrl='/vendors/em.png' 
          name='EcoMarket' 
          status='open'
          address='Arepo titun, Coker town, Ifo.'
          rating={4.2}
          qtySold={55}
        />
        <StoreSingle 
          imgUrl='/vendors/fsm.png' 
          name='Fresh Supermarket' 
          status='closed'
          address='Osungboye, Ibodun, Ifo.'
          rating={3.0}
          qtySold={23}
        />
        <StoreSingle 
          imgUrl='/vendors/fs.png' 
          name='Family Supermarket' 
          status='closed'
          address='Osungboye, Ibodun, Ifo.'
          rating={0}
          qtySold={23}
        />
        <StoreSingle 
          imgUrl='/vendors/ss.png' 
          name='Smart Shopping' 
          status='opened'
          address='Osungboye, Ibodun, Ifo.'
          rating={2.5}
          qtySold={23}
        />
      </div>
    </section>
  )
}

export default StoreList
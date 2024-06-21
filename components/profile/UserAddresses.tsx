import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import Image from 'next/image'

const UserAddresses = ({user}: LoggedInUserProps) => {
  return (
    <section className='w-full my-5'>
      <Card className='shadow-md mx-5 bg-muted'>
        <CardHeader className='flex-row justify-between items-center p-4'>
          <h6 className='font-semibold '>My Addresses</h6>
          <Button variant='link' size='icon' className=' md:hidden'>
            <Plus/>
          </Button>
          <Button className='hidden md:inline-flex'>
            <Plus className="mr-2 h-4 w-4" /> Add Address
          </Button>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col m-10 justify-center items-center opacity-60'>
            <Image src='/profile/no-address.png' width={150} height={150} alt='No address found'/>
            <p className='font-semibold opacity-90 py-5'>No Address Found!</p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default UserAddresses
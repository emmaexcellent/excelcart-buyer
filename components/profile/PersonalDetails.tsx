import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Edit } from 'lucide-react'
import { Button } from '../ui/button'
import MainSection from './MainSection'

const PersonalDetails = ({user}: LoggedInUserProps) => {
  return (
    <MainSection>
      <div className='shadow-md mx-5'>
        <div className='flex justify-between lg:gap-16 items-start p-2 pl-0'>
          <h6 className='font-semibold lg:text-lg'>Personal Details</h6>
          <Button variant='link' size='icon' className='border rounded-full md:hidden'>
            <Edit/>
          </Button>
          <Button className='hidden md:inline-flex'>
            <Edit className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </div>
        <div>
          <div className='text-sm lg:text-base space-y-3'>
            <p className='font-semibold flex'>
              <span>Username:</span> 
              <span className='font-normal ml-3'>{user.name}</span>
            </p>
            <p className='font-semibold'>
              <span>Phone:</span> 
              <span className='font-normal ml-9'>{user.phone}</span>
            </p>
            <p className='font-semibold flex'>
              <span>Email:</span> 
              <span className='font-normal ml-11 truncate'>{user.email}</span>
            </p>
          </div>
        </div>
      </div>
    </MainSection>
  )
}

export default PersonalDetails
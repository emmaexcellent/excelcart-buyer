import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Edit } from 'lucide-react'
import { Button } from '../ui/button'

const PersonalDetails = () => {
  return (
    <section className='w-full'>
      <Card className='shadow-md mx-2'>
        <CardHeader className='flex-row justify-between items-center p-4'>
          <h6 className='font-semibold '>Personal Details</h6>
          <Button variant='link' size='icon' className='border rounded-full'>
            <Edit/>
          </Button>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </section>
  )
}

export default PersonalDetails
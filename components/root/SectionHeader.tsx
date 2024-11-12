import React from 'react'
import { Button } from '../ui/button'

const SectionHeader = ({...props}) => {
  return (
    <div className={`w-full max-w-6xl mx-auto flex ${!props.description? 'justify-between':'justify-center'} items-center px-4`}>
      <div className='text-center'>
        <h1 className='font-bold text-lg md:text-xl capitalize'>{props.title}</h1>
        {props.description && (
          <p className='text-sm pt-2 font-semibold text-gray-400'>{props.description}</p>
        )}        
      </div>
      {!props.description && (
        <Button variant='link' className='p-2'>
          View All
        </Button>
      )}   
    </div>
  )
}

export default SectionHeader
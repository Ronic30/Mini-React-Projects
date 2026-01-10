import React from 'react'
import { Card1 } from './Card1'
import { Card2 } from './Card2'
import { Card3 } from './Card3'

export const RightContent = () => {
  return (
    <div className='h-full w-3/4 flex justify-around gap-10 p-5 '>
        <Card1 />
        <Card2 />
        <Card3 />
    </div>
  )
}

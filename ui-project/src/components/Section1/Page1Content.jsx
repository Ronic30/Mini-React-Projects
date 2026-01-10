import React from 'react'
import { LeftContent } from './LeftContent'
import { RightContent } from './RightContent'

export const Page1Content = () => {
  return (
    <div className='h-[87vh] w-full px-18 py-10  flex gap-15 items-center'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

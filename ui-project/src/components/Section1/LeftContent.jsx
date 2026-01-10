import React from 'react'
import { HeroText } from './HeroText'
import { Arrow } from './Arrow'

export const LeftContent = () => {
    return (
        <div className='flex flex-col p-6 font-bold justify-between h-full w-1/3'>
            <HeroText />
            <Arrow />

        </div>
    )
}

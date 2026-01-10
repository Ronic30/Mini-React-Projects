import React from 'react'
import { ArrowRight } from 'lucide-react'

export const Card1 = () => {
    return (
        <div className=' h-full w-1/4 relative rounded-4xl overflow-hidden'>
            <img className=' h-full w-full object-cover blur-md' src="https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D" alt="" />
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='flex flex-col justify-between h-full p-6' >
                    <div className='bg-white w-10 h-10 rounded-full flex items-center justify-around'>1</div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem expedita vitae explicabo sapiente mollitia provident recusandae reiciendis corporis? In, esse!</p>
                        <div className='flex justify-between items-center bg-purple-300 rounded-4xl px-2'>
                            <h3>Satisfied</h3>
                            <ArrowRight size={40} color="#000000" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

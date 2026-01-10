import React from 'react'
import { ArrowRight } from 'lucide-react'

export const Card2 = () => {
    return (
        <div className='h-full w-1/4 rounded-4xl relative overflow-hidden'>
            <img className=' h-full w-full object-cover blur-md' src="https://plus.unsplash.com/premium_photo-1678453147437-260a41db02dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww" alt="" />
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='flex flex-col justify-between h-full p-6' >
                    <div className='bg-white w-10 h-10 rounded-full flex items-center justify-around'>2</div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem expedita vitae explicabo sapiente mollitia provident recusandae reiciendis corporis? In, esse!</p>
                        <div className='flex justify-between items-center bg-purple-500 rounded-4xl px-2'>
                            <h3>Satisfied</h3>
                            <ArrowRight size={40} color="#000000" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

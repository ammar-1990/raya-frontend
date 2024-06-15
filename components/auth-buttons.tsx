import React from 'react'

type Props = {}

const AuthButtons = (props: Props) => {
  return (
    <div className='flex items-center gap-4 '>
        <button className='font-semibold w-[114px] 
        h-[52px] ' type='button'>Sign Up</button>
        <button type='button' 
        className='rounded-[12px] w-[114px] 
        h-[52px] bg-gradient-to-b
        font-semibold
         from-gradient-start to-gradient-end 
         opacity-100 hover:opacity-90 transition 
          text-white'>Login</button>
    </div>
  )
}

export default AuthButtons
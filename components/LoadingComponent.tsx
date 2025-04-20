import React from 'react'
import Logo from './Logo'

type Props = {}

const LoadingComponent = (props: Props) => {
  return (
    <div className='w-full min-h-screen bg-backGround flex items-center justify-center fixed top-0 left-0 z-[9999]'>
       <Logo width='w-[300px] animate-pulse'/>
    </div>
  )
}

export default LoadingComponent
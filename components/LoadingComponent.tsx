import React from 'react'

type Props = {}

const LoadingComponent = (props: Props) => {
  return (
    <div className='w-full min-h-screen bg-backGround flex items-center justify-center fixed top-0 left-0 z-[9999]'>
        <div className='text-5xl font-semibold animate-pulse text-white'>YUMA</div>
    </div>
  )
}

export default LoadingComponent
import React, { HTMLAttributes } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

type Props = {containerStyle?:string} & HTMLAttributes<HTMLButtonElement>

const SiteButton = ({className,children,containerStyle,...rest}: Props) => {
  return (
    <div className={cn('relative',containerStyle)}>
        <Button
    variant={'ghost'}
    className={cn('bg-transparent hover:bg-backGround hover:text-white rounded-full border w-[126px] border-neutral-600 relative bg-backGround z-30 ',className)}
    >
      
      

       
        {children}</Button>
    <span className='absolute right-0 top-1/2 rounded-full  bg-gradient-to-r from-gradient_blur-start to-gradient_blur-end  w-20 h-12 -translate-y-[50%] blur-md z-0'/>
    <span className='absolute -right-1 top-1/2 rounded-full  bg-gradient-to-r from-gradient_blur-start to-gradient_blur-end  w-8 h-8 -translate-y-[68%] blur-[12px] z-0'/>
    <span className='absolute right-0 top-1/2 rounded-full  bg-gradient-to-r from-gradient_blur-start to-gradient_blur-end  w-8 h-8 -translate-y-[70%] blur-[4px] z-0'/>
    </div>
    
  )
}

export default SiteButton
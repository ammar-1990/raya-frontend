import React, { HTMLAttributes } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

type Props = {containerStyle?:string,fn:(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void} & HTMLAttributes<HTMLButtonElement>

const SiteButton = ({className,children,containerStyle,fn,...rest}: Props) => {
  return (
    <div className={cn('relative group',containerStyle)}
    onClick={(e)=>fn(e)} 
    >
        <Button
   
    style={{background:'linear-gradient(to right, #8338EC,#B923FF)'}}
    className={cn('rounded-full p-0.5 flex items-center justify-center',className)}
    >
      <div className='bg-[#1E0044] w-[98%] h-[99%] flex items-center justify-center rounded-full px-4 py-1 text-inherit leading-none overflow-hidden'>
      {children}
      </div>
      

       
      </Button>
      <div className="absolute -inset-[0.5px] z-[-1] blur-[10px] rounded-full opacity-60"
     style={{
       background: "linear-gradient(to right, #8338EC, #B923FF)"
     }} />
    </div>
    
  )
}

export default SiteButton
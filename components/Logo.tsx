import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {
    width?:string
}

const Logo = ({width}: Props) => {
  return (
    <div className={cn('w-16 aspect-video relative   relativ',width)}>
<Image src='/logo.png' className='object-contain' fill alt='Logo' />
    </div>
  )
}

export default Logo
import Image from 'next/image'
import React from 'react'

type Props = {}

const HeroImage = (props: Props) => {
  return (
    <div className='mx-auto max-w-[750px] 3xl:max-w-[1200px] w-full hover:scale-[1.01] transition   overflow-hidden   aspect-[16/11] p-[1.7px] rounded-lg     hidden md:block z-[10] relative'>
        <div className='bg-conical-gradient from-black via-black to-gradient_main-end  -top-1/2 -left-1/2  absolute w-[200%] h-[200%] animate-spin-slow ' />
        <div className='w-full h-full relative rounded-lg overflow-hidden'>
            <Image src={'/hero.png'} alt='hero' fill className='object-cover' />

        </div>
    </div>
  )
}

export default HeroImage
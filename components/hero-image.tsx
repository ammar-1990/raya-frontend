import Image from 'next/image'
import React from 'react'

type Props = {}

const HeroImage = (props: Props) => {
  return (
    <div className='mx-auto max-w-[750px] w-full   aspect-video p-4 rounded-lg bg-zinc-600 border hidden md:block z-[9999] relative'>
        <div className='w-full h-full relative rounded-lg overflow-hidden'>
            <Image src={'/hero.png'} alt='hero' fill className='object-cover' />

        </div>
    </div>
  )
}

export default HeroImage
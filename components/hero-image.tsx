import Image from 'next/image'
import React from 'react'

type Props = {}

const HeroImage = (props: Props) => {
  return (
    <div className='mx-auto max-w-[750px] 3xl:max-w-[1200px] w-full hover:scale-[1.01] transition   aspect-[16/12] p-4 rounded-lg bg-zinc-600 border hidden md:block z-[10] relative'>
        <div className='w-full h-full relative rounded-lg overflow-hidden'>
            <Image src={'/hero.png'} alt='hero' fill className='object-cover' />

        </div>
    </div>
  )
}

export default HeroImage
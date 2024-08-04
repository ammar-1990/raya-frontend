'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const HeroImage = (props: Props) => {

  const [rotation, setRotation] = useState(60); // Start with 60 degrees
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
 console.log('scroll')
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how far the element is from the center of the viewport
      const elementCenterY = rect.top + rect.height / 2;
      const viewportCenterY = viewportHeight / 2;
      const distanceFromCenter = elementCenterY - viewportCenterY;

      // Determine rotation based on the distance from the center
      const maxDistance = viewportHeight / 2;
      const newRotation = Math.max(
        0,
        Math.min(60, (distanceFromCenter / maxDistance) * 60)
      );

      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div 
    ref={imageRef}
    style={{ transform: `rotateX(${rotation}deg)` }}
    className='mx-auto max-w-[750px] 3xl:max-w-[1200px] w-full    transition duration-300   overflow-hidden    aspect-[16/11] p-[1.7px] rounded-lg     hidden md:block z-[10] relative'>
        <div className='bg-gradient-to-t from-gradient_main-end       to-black -top-1/2 -left-1/2  absolute w-[200%] h-[200%] animate-spin-slow ' />
   
     
        <div className='w-full h-full relative rounded-lg overflow-hidden '>
            <Image src={'/hero.png'} alt='hero' fill className='object-cover' />

        </div>
    </div>
  )
}

export default HeroImage
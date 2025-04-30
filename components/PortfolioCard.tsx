import { Portfolio } from '@prisma/client'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    portfolio:Portfolio
}

const PortfolioCard = ({portfolio}: Props) => {
    const colors = [
        "#FF6B6B", // soft red
        "#6BCB77", // fresh green
        "#4D96FF", // clean blue
        "#FFD93D", // warm yellow
        "#FF6EC7"  // pinkish purple
      ];
      
     
      const randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomIndex];

      const year = portfolio.endDate.getFullYear()
  return (
    <div className='grid grid-cols-4'>
        {/* left part */}
        <div style={{backgroundColor:randomColor}} className='col-span-4 md:col-span-3 rounded-[8px] p-[24px]  '>
            <div className='pb-2 border-b-2 border-[#ffffff5c]  '>
                <p className='text-xs'>{year}</p>
            </div>
            <div className='flex items-center justify-between mt-8 '>
                    <h2 className='text-3xl'>{portfolio.title}</h2>
                    <Link  href={`./portfolio/${portfolio.slug}`}>
                    <ArrowRight className='size-12' />
                    </Link>
                  
            </div>
            <div className=' bg-[#0000005c] aspect-video mt-3 relative'>
        <Image fill className='object-contain' alt='portfolio img' src={portfolio.mainImage} /> 
            </div>
        </div>
        {/* right part */}
        <h4 style={{color:randomColor}} className='text-xs first-letter:capitalize col-span-4 md:col-span-1 md:text-right font-sans'>{portfolio.escerpt}</h4>
    </div>
  )
}

export default PortfolioCard
import { Portfolio } from '@prisma/client'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    portfolio:Portfolio
}

const PortfolioCard = ({portfolio}: Props) => {
 
      const color = portfolio.color ?? 'white';

      const year = portfolio.endDate.getFullYear()
  return (
    <div className='grid grid-cols-4'>
        {/* left part */}
        <div style={{backgroundColor:color}} className='col-span-4 md:col-span-3 rounded-[8px] p-[24px]  '>
            <div className='pb-2 border-b-2 border-[#0000007b]  '>
                <p className='text-xs text-[#0000007b]'>{year}</p>
            </div>
            <div className='flex items-center justify-between mt-8 '>
                    <h2 className='text-3xl text-[#0000007b]'>{portfolio.title}</h2>
                    <Link  href={`./portfolio/${portfolio.slug}`}>
                    <ArrowRight className='size-12 text-[#0000007b]' />
                    </Link>
                  
            </div>
            <div className=' bg-[#0000005c] aspect-video mt-3 relative'>
        <Image fill className='object-cover' alt='portfolio img' src={portfolio.mainImage} /> 
            </div>
        </div>
        {/* right part */}
        <h4 style={{color:color}} className='text-xs first-letter:capitalize col-span-4 md:col-span-1 md:text-right font-sans'>{portfolio.escerpt}</h4>
    </div>
  )
}

export default PortfolioCard
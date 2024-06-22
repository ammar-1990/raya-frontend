import { BackgroundBeams } from '@/components/background-beams'
import SiteButton from '@/components/site-button'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <BackgroundBeams/>
      <div className='min-h-[calc(100vh-74px)] flex flex-col  items-center relative'>
      <p className='text-5xl text-white font-bold mt-24'>Crafting High-Performance Websites</p>
      <p className='text-5xl text-white font-bold mt-8'>with Stunning <span className='bg-gradient-to-b from-gradient_main-start from-40% to bg-gradient_main-end bg-clip-text text-transparent'>Design & Speed</span></p>
      <p className='text-white text-lg mt-12'>We build websites that drive results and help your business grow.</p>
      <p className='text-white text-lg mt-4'>No Calls. No BS.Just Results.</p>
      <Button variant={'site'} className=' mt-12'>Book a call <ChevronRight className='ml-2' size={16}/></Button>
      </div>
    
    </div>
  )
}

export default page
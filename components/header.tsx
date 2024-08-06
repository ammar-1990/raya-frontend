import React from 'react'
import NavLinks from './navLinks'
import HamburgerSheet from './hamburger-sheet'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='relative z-10'>
<div className='siteContainer flex items-center justify-between h-[72px]'>
    {/* logo */}
    <div className='w-12 aspect-video relative cursor-pointer'>
<Image src={'/raya-logo.png'} fill alt='logo' className='object-contain'/>
    </div>

    <div className='hidden md:block'>
    <NavLinks/>
    </div>

    <div className='md:hidden block'>
      <HamburgerSheet/>
    </div>
   
</div>
    </div>
  )
}

export default Header
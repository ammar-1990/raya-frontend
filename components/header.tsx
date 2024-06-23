import React from 'react'
import NavLinks from './navLinks'
import HamburgerSheet from './hamburger-sheet'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='relative z-10'>
<div className='siteContainer flex items-center justify-between h-[72px]'>
    {/* logo */}
    <div className='text-white'>Logo</div>

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
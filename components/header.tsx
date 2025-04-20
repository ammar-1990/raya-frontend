import React from 'react'
import NavLinks from './navLinks'
import HamburgerSheet from './hamburger-sheet'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className=' sticky top-0 z-50 bg-backGround/80 backdrop-blur-md'>
<div className='siteContainer flex items-center justify-between h-[72px]'>
    {/* logo */}
    <Link href={'/'}>
<Logo/>
    </Link>


    <div className='hidden md:block'>
    <NavLinks/>
    </div>
{/* 
    <div className='md:hidden block'>
      <HamburgerSheet/>
    </div> */}
   
</div>
    </header>
  )
}

export default Header
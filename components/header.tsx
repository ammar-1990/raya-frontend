import React from 'react'
import Logo from './logo'
import NavLinks from './navLinks'
import AuthButtons from './auth-buttons'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='px-24 py-4  bg-white'>
        <div className='w-full flex items-center justify-between'>
            <Logo/>
            <NavLinks/>
            <AuthButtons/>
        </div>
    </header>
  )
}

export default Header
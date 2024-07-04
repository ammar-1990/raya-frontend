'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import SiteButton from './site-button'
import { useContact } from '@/contexts/contact-context'

type Props = {}

const NavLinks = (props: Props) => {

  const {open,setOpen} = useContact()
const pathname = usePathname()
    const links = [
        {
        label:"Services",
        link:"#services",
        active:pathname==="#services"
  },
        {
        label:"Contact us",
      
      fn:(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault();
       setOpen(true)
       console.log(open)
      }
  },
  //       {
  //       label:"Pricing",
  //       link:"/pricing",
  //       active:pathname==="/pricing"
  // },
  //       {
  //       label:"Blog",
  //       link:"blog",
  //       active:pathname==="/blog"
  // },
]
  return (
    <nav>
        <ul className='flex items-center gap-16 text-white text-sm'>
            {links.map((link)=>{
              if(link.fn) return <li key={link.label}>
              <Link href={''} onClick={(e)=>link.fn(e)}  className='tracking-wider font-sans'>{link.label}</Link>
          </li>
              return <li key={link.label}>
                <Link href={link.link}   className='tracking-wider font-sans'>{link.label}</Link>
            </li>})}
            <li><SiteButton className='tracking-wider'>Get Started</SiteButton></li>
        </ul>
    </nav>
  )
}

export default NavLinks
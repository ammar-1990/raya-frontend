'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import SiteButton from './site-button'

type Props = {}

const NavLinks = (props: Props) => {
const pathname = usePathname()
    const links = [
        {
        label:"Services",
        link:"/services",
        active:pathname==="/services"
  },
        {
        label:"Offers",
        link:"/offers",
        active:pathname==="/offers"
  },
        {
        label:"Pricing",
        link:"/pricing",
        active:pathname==="/pricing"
  },
        {
        label:"Blog",
        link:"/blog",
        active:pathname==="/blog"
  },
]
  return (
    <nav>
        <ul className='flex items-center gap-16 text-white text-sm'>
            {links.map((link)=><li key={link.label}>
                <Link href={link.link} target='_blank' className='tracking-wider font-sans'>{link.label}</Link>
            </li>)}
            <li><SiteButton className='tracking-wider'>Get Started</SiteButton></li>
        </ul>
    </nav>
  )
}

export default NavLinks
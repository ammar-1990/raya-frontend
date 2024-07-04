'use client'

import { Service } from '@prisma/client'
import React, { useState } from 'react'
import ServiceCard from './service-card'
import Link from 'next/link'

type Props = {services:Service[]}

const ServiceFeed = ({services}: Props) => {
    const [show, setShow] = useState('')
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 mt-4  md:mt-12" onMouseLeave={()=>setShow('')}>
    {services.map((service)=><Link key={service.id} href={`/services/${service.slug}`}><ServiceCard  service={service} show={show} setShow={(val:string)=>setShow(val)}/></Link>)}

  </div>
  )
}

export default ServiceFeed
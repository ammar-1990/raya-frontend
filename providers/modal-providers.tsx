'use client'

import ContactDrawer from '@/components/contact-drawer'
import React, { useEffect, useState } from 'react'

type Props = {}

const ModalProvide = (props: Props) => {

    const [mount, setMount] = useState(false)

    useEffect(()=>{
        setMount(true)
    },[])

    if(!mount) return null
  return (
    <>
    <ContactDrawer/>
    </>
  )
}

export default ModalProvide
'use client'

import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import { useContact } from '@/contexts/contact-context'

type Props = {}

const SheetButton = (props: Props) => {
    const {setOpen} = useContact()
  return (
    <Button onClick={()=>setOpen(true)}
    variant={"site"}
    className=" mt-12 flex items-center justify-center pt-2.5"
  >
    Book a call <ChevronRight className="ml-2" size={16} />
  </Button>
  )
}

export default SheetButton
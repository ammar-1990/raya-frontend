import { cn } from '@/lib/utils'
import React, { HTMLAttributes, ReactNode } from 'react'

type Props = {children:ReactNode} & HTMLAttributes<HTMLDivElement>

const SectionWrapper = ({children,className,...rest}: Props) => {
  return (
    <section className={cn('md:p-12 p-4 max-w-[1500px] mx-auto',className)}>
        {children}
    </section>
  )
}

export default SectionWrapper
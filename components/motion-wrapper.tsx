'use client'
import { MotionProps,motion } from 'framer-motion'
import React, { HTMLAttributes, ReactNode } from 'react'

type Props =MotionProps & HTMLAttributes<HTMLDivElement> & {children:ReactNode}

const MotionWrapper = ({children,...rest}: Props) => {
  return (
    <motion.div {...rest}>{children}</motion.div>
  )
}

export default MotionWrapper
import Header from '@/components/header'
import { MountProvider } from '@/contexts/mount-context'
import React, { ReactNode } from 'react'

type Props = {children:ReactNode}

const layout = ({children}: Props) => {
  return (
   
    <div>
        <Header/>
        <div>
        <MountProvider>
          {children}
          </MountProvider>
        </div>
    </div>

  )
}

export default layout
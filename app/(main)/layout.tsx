

import Header from '@/components/header'
import React, { ReactNode } from 'react'

type Props = {children:ReactNode}

const layout = ({children}: Props) => {
  return (
   
    <div className='bg-backGround min-h-screen'>
      <div>
        
      </div>
      <Header/>
        <div>
          {children}
        </div>
    </div>

  )
}

export default layout
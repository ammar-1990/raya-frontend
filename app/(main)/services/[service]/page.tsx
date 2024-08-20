import React from 'react'

type Props = {
  params:{service:string}
}

const page = ({params}: Props) => {
  return (
    <div className='flex items-center justify-center min-h-screen text-white font-serif uppercase'>{params.service}</div>
  )
}

export default page
import Heading from '@/components/heading'
import React from 'react'
import prisma from '@/lib/prisma'
import PortfolioCard from '@/components/PortfolioCard'
import Header from '@/components/header'

type Props = {}

const page = async(props: Props) => {
  const portfolios = await prisma.portfolio.findMany()
  return (
    <div className='min-h-screen'> 
<Header firstWord='Our' secondWord='Portfolio' descriptio='We build websites that drive results and help your business grow.' />
 

<div className=' siteContainer space-y-12 mt-12'>
    {portfolios.map(portfolio=><PortfolioCard key={portfolio.id} portfolio={portfolio}/>)}
      </div>
    </div>
  )
}

export default page
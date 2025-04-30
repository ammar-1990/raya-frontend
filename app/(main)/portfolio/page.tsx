import Heading from '@/components/heading'
import React from 'react'
import prisma from '@/lib/prisma'
import PortfolioCard from '@/components/PortfolioCard'

type Props = {}

const page = async(props: Props) => {
  const portfolios = await prisma.portfolio.findMany()
  return (
    <div className='min-h-screen'> 

<Heading
        title={"Portfolio"}
        description={"Some of our achievments"}
        className="items-center justify-center mt-12"
      />

<div className='mt-8 siteContainer space-y-3'>

    {portfolios.map(portfolio=><PortfolioCard key={portfolio.id} portfolio={portfolio}/>)}
      </div>
    </div>
  )
}

export default page
import React from 'react'

type Props = {title:string}

const SectionBadge = ({title}: Props) => {
  return (
    <span className=" tracking-wider  py-1 px-2 border rounded-lg block mx-auto w-fit text-xs text-zinc-300 font-sans">
   {title}
  </span>
  )
}

export default SectionBadge
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Service } from '@prisma/client';
import React, { useState } from 'react';
import { iconsMapping } from '@/types';

type Props = { service: Service,show:string,setShow:(val:string)=>void };

const ServiceCard = ({ service,setShow,show }: Props) => {
 
  return (
    <motion.article className="relative    p-1.5" onMouseEnter={()=>setShow(service.id)}  >
      <div className="bg-gradient-to-r  min-h-[175px] from-gradient_dark-start to-gradient_dark-end h-full border-zinc-800 border p-6 rounded-lg relative z-20">
        <div className='flex items-center gap-3   '>
          <span className=' flex items-center justify-center text-white '>
            {iconsMapping[service.icon]}
          </span>
        <h3 className='capitalize text-white '>{service.label}</h3>
        </div>

        <p className='text-xs text-text mt-3 font-sans font-light'>{service.description}</p>
      </div>
     <AnimatePresence>
     {show === service.id &&  <motion.div
        layoutId={`hoverBackground`}
      initial={{opacity:0}}
      animate={{opacity:1,  transition: { duration: 0.15 },}}
      exit={{opacity:0,transition:{delay:0.2,duration:0.15}}}
        className="absolute inset-0 rounded-xl block  bg-gradient-to-b from-gradient_main-start to-gradient_main-end   "
      />}
     </AnimatePresence>
    </motion.article>
  );
};

export default ServiceCard;

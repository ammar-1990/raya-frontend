'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Service } from '@prisma/client';
import React, { useState } from 'react';

type Props = { service: Service,show:string,setShow:(val:string)=>void };

const ServiceCard = ({ service,setShow,show }: Props) => {
 
  return (
    <motion.article className="relative    p-2" onMouseEnter={()=>setShow(service.id)}  >
      <div className="bg-gradient-to-r  min-h-[250px] from-gradient_dark-start to-gradient_dark-end h-full border-[#334155] border p-8 rounded-2xl relative z-20">
        <h3 className='capitalize text-white '>{service.label}</h3>
        <p className='text-xs text-text mt-8 font-sans'>{service.description}</p>
      </div>
     <AnimatePresence>
     {show === service.id &&  <motion.div
        layoutId={`hoverBackground`}
      initial={{opacity:0}}
      animate={{opacity:1,  transition: { duration: 0.15 },}}
      exit={{opacity:0,transition:{delay:0.2,duration:0.15}}}
        className="absolute inset-0 rounded-3xl block  bg-gradient-to-b from-gradient_main-start to-gradient_main-end   "
      />}
     </AnimatePresence>
    </motion.article>
  );
};

export default ServiceCard;

'use client'

import { Variants } from "framer-motion";
import Image from "next/image";
import { FaChess, FaMagnifyingGlass, FaRuler } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import Motion from "./motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export const WhatWeDo = () => {
    const [theImage, setTheImage] = useState(0)
    const whatWeDo = [
      {
        label: "Discovery",
        description:
          "We meet with you to learn about your business, your goals, and your target audience.",
        icon: <FaMagnifyingGlass size={26} />,
      },
      {
        label: "Strategy",
        description:
          "We develop a customized marketing strategy that is based on your unique needs and goals.",
        icon: <FaChess size={26} />,
      },
      {
        label: "Execution",
        description:
          "We execute our strategy using the latest digital marketing tools and techniques.",
        icon: <TbTargetArrow size={26} />,
      },
      {
        label: "Measurement",
        description:
          "We track the results of our campaigns so that we can make adjustments as needed.",
        icon: <FaRuler size={26} />,
      },
    ];
    const containerVariants:Variants = {
      hidden: { opacity: 1 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,delayChildren:0.4,
          
        },
      },
      
    };
    
    const itemVariants:Variants = {
      hidden: { opacity: 0,y:20  },
      show: { opacity: 1,y:0 ,  },
     
    };
    return (
  
      <section>
           <span className=" tracking-wider  py-1 px-2 border rounded-lg block mx-auto w-fit text-xs text-zinc-300 font-sans">Why Us</span>
     <h2 className="mx-auto max-w-[400px] text-center text-3xl text-white capitalize mt-6">
   What We Do ?</h2>
     <p className="text-zinc-400 text-xs max-w-[500px] px-3 mt-3 mx-auto text-center font-sans">  We believe that the best way to create successful marketing campaigns
            is to work closely with our clients to understand their goals and
            challenges.</p>
     <div className="siteContainer grid grid-cols-1 md:grid-cols-2 gap-10  md:gap-4 lg:gap-20 mt-6">
        <article className="flex flex-col gap-12">
      
      
          <div className=" relative  rounded-3xl overflow-hidden  w-full aspect-square text-white">
            {/* <Image
              fill
              alt="what we do"
              src={"/wwd.png"}
              className="object-cover"
            /> */}
            {theImage}
          </div>
        </article>
  
        <Motion 
           variants={containerVariants}
           initial="hidden"
           whileInView="show"
            viewport={{ once: true }}
        className="space-y-1 flex flex-col justify-between">
          {whatWeDo.map((el,index) => (
            <div
            onMouseEnter={()=>setTheImage(index)}
         
            key={el.label}
            className={cn("min-h-[100px] border border-zinc-700 rounded-lg p-5 cursor-pointer transition",index===theImage && 'border-gradient_main-start')} >
              <Motion  
              
          variants={itemVariants}
            className="overflow-hidden"
            ><WhatWeDoCard  whatWeDo={el} /></Motion>
              </div>
          ))}
        </Motion>
      </div>
      </section>
   
    );
  };
  
  const WhatWeDoCard = ({
    whatWeDo,
  }: {
    whatWeDo: { label: string; description: string; icon: ReactNode };
  }) => {
    return (
      <article className="flex  gap-4 ">
        <div className="md:w-20  md:h-20 w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center bg-gradient-to-b from-gradient_main-start to-gradient_main-end text-white ">
          {whatWeDo.icon}
        </div>
        <div>
          <h3 className="text-white text-2xl">{whatWeDo.label}</h3>
          <p className="text-white/60 font-sans max-w-[400px] text-xs md:text-sm mt-0 md:mt-1">
            {whatWeDo.description}
          </p>
        </div>
      </article>
    );
  };
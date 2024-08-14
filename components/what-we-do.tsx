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
          "We start by getting to know your business, your objectives, and the audience you want to reach.",
        icon: <FaMagnifyingGlass size={26} />,
      },
      {
        label: "Strategy",
        description:
          "We craft a strategy that's specifically designed around your goals and requirements.",
        icon: <FaChess size={26} />,
      },
      {
        label: "Action",
        description:
          "We bring our strategy to life with the most up-to-date digital tools and techniques.",
        icon: <TbTargetArrow size={26} />,
      },
      {
        label: "Monitoring",
        description:
          "We continuously track results to optimize our strategies and improve performance.",
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

    const images = ['/discovery.jpg','/strategy.jpg','/excution.jpg','/measurments.jpg']
    return (
  
      <section>
           <span className=" tracking-wider  py-1 px-2 border rounded-lg block mx-auto w-fit text-xs text-zinc-300 font-sans">Why Us</span>
     <h2 className="mx-auto max-w-[400px] text-center text-3xl text-white capitalize mt-6">
   What We Do ?</h2>
     <p className="text-zinc-400 text-xs max-w-[500px] px-3 mt-3 mx-auto text-center font-sans">We create digital solutions that help your business grow. From software to marketing, <br/>we have you covered.</p>
     <div className="siteContainer grid grid-cols-1 lg:grid-cols-2 gap-10  md:gap-4 lg:gap-20 mt-6">
        <article className="flex flex-col gap-12">
      
      
          <Motion
          key={theImage}
          initial={{opacity:0,x:-20}}
          animate={{opacity:1,x:0}}
           className=" relative  rounded-3xl overflow-hidden  w-full aspect-square text-white">
            <Image
              fill
              alt="what we do"
              src={images[theImage]}
              className="object-cover"
            />
           
          </Motion>
        </article>
  
        <div 
        
        className="space-y-1 flex flex-col justify-between">
          {whatWeDo.map((el,index) => (
            <div
            onMouseEnter={()=>setTheImage(index)}
         
            key={el.label}
            className={cn("min-h-[100px] border border-zinc-700 rounded-lg p-5 cursor-pointer transition",index===theImage && 'border-gradient_main-start')} >
              <div  
              
    
            className="overflow-hidden"
            ><WhatWeDoCard  whatWeDo={el} /></div>
              </div>
          ))}
        </div>
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
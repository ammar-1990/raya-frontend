

import prisma from "@/lib/prisma"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";
import ServiceCard from "@/components/service-card";
import ServiceFeed from "@/components/service-feed";
import { FlipWords } from "@/components/flip-words";
import Header from "@/components/header";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">


      {/* Hero section */}
      <div className="relative pb-12">
        <div className="bg-dot-white/[0.2]  [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_95%)] absolute inset-0 w-full h-full"/>
      <Header />
      <Hero />
      </div> 
      {/* Services */}
      <div className="mt-12">
        <Services />
      </div>
    </div>
  );
};

export default page;

const Hero = () => {
  const words = ["better", "cute", "beautiful", "modern"]
  return (
    <section className="px-6  flex flex-col  items-center relative  py-12 mt-12">
      
      <p className="text-[24px] sm:text-4xl  lg:text-5xl xl:text-6xl 3xl:text-7xl tracking-wide text-white font-bold  text-center">
        Crafting High-Performance Websites
      </p>
      <p className="text-[24px] sm:text-4xl  lg:text-5xl xl:text-6xl 3xl:text-7xl tracking-wide text-white font-bold lg:mt-8 mt-2 text-center">
        with Stunning{" "}
      
        <FlipWords words={words} />
       
      </p>
      <p className="text-white mt-6   lg:mt-12 font-sans text-xs sm:text-sm lg:text-lg text-center">
        We build websites that drive results and help your business grow.
      </p>
      <p className="text-white    lg:mt-4 mt-1 font-sans  text-xs sm:text-sm lg:text-lg text-center">
        No Calls. No BS.Just Results.
      </p>
      <Button variant={"site"} className=" mt-12">
        Book a call <ChevronRight className="ml-2" size={16} />
      </Button>
    </section>
  );
};

const Services = async() => {
  const services = await prisma.service.findMany({orderBy:{createdAt:'desc'}})
  return (
    <section className="siteContainer">
      <h2 className="text-center text-white text-2xl md:text-4xl tracking-widest">Services</h2>
      <ServiceFeed services={services}/>
  
    </section>
  );
};

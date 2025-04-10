import prisma from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import React, { ReactNode } from "react";
import ServiceCard from "@/components/service-card";
import ServiceFeed from "@/components/service-feed";
import { FlipWords } from "@/components/flip-words";
import Header from "@/components/header";
import SubscriptionCard from "@/components/subscription-card";
import Image from "next/image";
import { FaChess, FaMagnifyingGlass, FaRuler } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { LampContainer } from "@/components/lamp-effect";
import Motion from "@/components/motion";
import { Variants } from "framer-motion";
import SheetButton from "@/components/sheet-button";
import HeroImage from "@/components/hero-image";
import ClientButton from "@/components/clien-button";
import { WhatWeDo } from "@/components/what-we-do";
import SectionBadge from "@/components/SectionBadge";

type Props = {};
export const revalidate = 0;
const page = (props: Props) => {
  return (
    <div className="pb-12">
      {/* Hero section */}
      <div className="relative pb-44 perspective">
        <div className="bg-dot-white/[0.2]  [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)] absolute inset-0 w-full h-full" />
      
        <Hero />
        <HeroImage />
      </div>
      {/* what we do */}
      <div id="services" className="pt-8">
      <Services />
      </div>
      {/* Services */}
      <div  className="sm:mt-44 mt-32 pt-8">
      <WhatWeDo />
      
      </div>
      {/* Subscriptions */}
      {/* <div className="">
        <LampContainer className="">
          <div className="relative z-50">
          <Subscriptions />
          </div>
       
        </LampContainer>
  
      </div> */}
      {/* Banner */}
      <div className="mt-24 siteContainer ">
        <Banner />
      </div>
    </div>
  );
};

export default page;

const Hero = () => {
  const words = ["better", "cutting-edge", "customized", "modern"];
  return (
    <section className="px-6  flex flex-col  items-center relative  py-12 mt-12">
      <p className="text-[24px] sm:text-4xl  lg:text-5xl xl:text-6xl 3xl:text-7xl tracking-wide text-white font-bold  text-center">
      Creating <span className="inline-block text-start v"><FlipWords duration={1000} words={words} /></span> Digital Solutions 
      </p>
      <p className="text-[24px] sm:text-4xl  lg:text-5xl xl:text-6xl 3xl:text-7xl tracking-wide text-white font-bold lg:mt-8 mt-2 text-center">
      for Your Business Success 
      </p>
      <p className="text-white mt-6   lg:mt-12 font-sans text-xs sm:text-sm lg:text-lg text-center">
      Crafting digital solutions that enhance performance and elevate your business. 
      </p>
      <p className="text-white    lg:mt-4 mt-1 font-sans  text-xs sm:text-sm lg:text-lg text-center">
      Results-Focused Approach.
      </p>
    <SheetButton/>
    </section>
  );
};

const Services = async () => {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <section className="siteContainer">
   <SectionBadge title="Our Services" />
   <h2 className="mx-auto max-w-[400px] text-center text-3xl text-white capitalize mt-6">Transform Your Business with
   our digital unique solutions</h2>
   <p className="text-zinc-400 text-xs max-w-[500px] px-3 mt-3 mx-auto text-center font-sans">Take your business to the next level with our unique digital solutions. We use the latest tech and creative ideas to boost your brand and help you grow</p>
      <ServiceFeed services={services} />
    </section>
  );
};

const Subscriptions = async () => {
  const subscriptions = await prisma.subscription.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  return (
    <section className="w-full">
      <h2 className="text-center text-white text-2xl md:text-4xl tracking-widest">
        Purchase Subscription
      </h2>
      <p className="mt-4  text-white text-center font-sans">
        Choose the plan that works for you.
      </p>
      {/* subscriptions feed */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-4  md:mt-12">
        {subscriptions.map((subscription) => (
          <SubscriptionCard subscription={subscription} key={subscription.id} />
        ))}
      </div>
    </section>
  );
};


const Banner = () => {
  return (
    <section className="relative md:aspect-video max-h-[371px] w-full rounded-xl bg-[#513EF5] overflow-hidden gap-8 md:gap-12 lg:gap-24 grid grid-cols-1 md:grid-cols-2 items-center p-8 lg:px-20 sm:px-12 px-6">
      <div
        className="absolute h-[200%] aspect-square
       rounded-full -left-[100px] top-1/2 -translate-y-[50%]
        bg-gradient-to-b from-gradient_main-start to-gradient_main-end to-100% blur-[2px]"
      />

      <div
        className="absolute h-[120%] aspect-square
       rounded-full -left-[100px] top-1/2 -translate-y-[50%]
        bg-gradient-to-r from-gradient_main-start from-4% to-gradient_main-end to-95%  blur-[2px]"
      />

      <div className="absolute h-full aspect-square rounded-full -left-[280px] top-1/2 -translate-y-[50%] bg-[#513EF5] blur-[2px]" />
      <div
        className="absolute h-[120%] aspect-square
       rounded-full left-[345px] top-1/2 -translate-y-[50%]
        bg-gradient-to-r from-gradient_main-start from-4% to-gradient_main-end to-95% blur-[2px]"
      />
      <article>
        <p className="relative z-50 text-white text-2xl md:text-4xl lg:text-6xl font-semibold font-sans tracking-wider capitalize leading-1">
          Elevate your
          <br /> brand Today!
        </p>
      </article>
      <article className="relative z-50">
<p className="text-white font-sans text-xs sm:text-sm md:text-base">Ready to transform your digital presence? Let&apos;s<br/> create magic together! book our services now!</p>
<ClientButton title=" Book a call" className="" />
      </article>
    </section>
  );
};

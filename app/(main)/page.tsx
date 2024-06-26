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

type Props = {};
export const revalidate = 0;
const page = (props: Props) => {
  return (
    <div className="pb-12">
      {/* Hero section */}
      <div className="relative pb-12">
        <div className="bg-dot-white/[0.2]  [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_95%)] absolute inset-0 w-full h-full" />
        <Header />
        <Hero />
      </div>
      {/* what we do */}
      <div className="sm:mt-48 mt-32">
        <WhatWeDo />
      </div>
      {/* Services */}
      <div className="sm:mt-44 mt-32">
        <Services />
      </div>
      {/* Subscriptions */}
      <div className="">
        <LampContainer className="">
          <div className="relative z-50">
          <Subscriptions />
          </div>
       
        </LampContainer>
  
      </div>
      {/* Banner */}
      <div className="mt-24 siteContainer ">
        <Banner />
      </div>
    </div>
  );
};

export default page;

const Hero = () => {
  const words = ["better", "cute", "beautiful", "modern"];
  return (
    <section className="px-6  flex flex-col  items-center relative  py-12 mt-12">
      <p className="text-[24px] sm:text-4xl  lg:text-5xl xl:text-6xl 3xl:text-7xl tracking-wide text-white font-bold  text-center">
        Crafting High-Performance Websites
      </p>
      <p className="text-[24px] sm:text-4xl  lg:text-5xl xl:text-6xl 3xl:text-7xl tracking-wide text-white font-bold lg:mt-8 mt-2 text-center">
        with Stunning <FlipWords words={words} />
      </p>
      <p className="text-white mt-6   lg:mt-12 font-sans text-xs sm:text-sm lg:text-lg text-center">
        We build websites that drive results and help your business grow.
      </p>
      <p className="text-white    lg:mt-4 mt-1 font-sans  text-xs sm:text-sm lg:text-lg text-center">
        No Calls. No BS.Just Results.
      </p>
      <Button
        variant={"site"}
        className=" mt-12 flex items-center justify-center pt-2.5"
      >
        Book a call <ChevronRight className="ml-2" size={16} />
      </Button>
    </section>
  );
};

const Services = async () => {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <section className="siteContainer">
      <h2 className="text-center text-white text-2xl md:text-4xl tracking-widest">
        Services
      </h2>
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
    <section className="siteContainer">
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

const WhatWeDo = () => {
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
        staggerChildren: 0.2,delayChildren:0.4
      },
    },
  };
  
  const itemVariants:Variants = {
    hidden: { height: 0,y:20  },
    show: { height: 'auto',y:0 ,  },
   
  };
  return (
    <section className="siteContainer grid grid-cols-1 md:grid-cols-2 gap-10  md:gap-4 lg:gap-20">
      <article className="flex flex-col gap-12">
        <h3 className="text-white text-3xl capitalize">What We Do?</h3>
        <p className="max-w-[400px] text-white/60 font-sans">
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </p>
        <div className=" relative  rounded-3xl overflow-hidden  w-full aspect-video">
          <Image
            fill
            alt="what we do"
            src={"/wwd.png"}
            className="object-cover"
          />
        </div>
      </article>

      <Motion 
         variants={containerVariants}
         initial="hidden"
         whileInView="show"
      className="space-y-4 flex flex-col justify-between">
        {whatWeDo.map((el,i) => (
          <div
          key={el.label}
          className="min-h-[100px]" >
            <Motion  
            
        variants={itemVariants}
          className="overflow-hidden"
          ><WhatWeDoCard  whatWeDo={el} /></Motion>
            </div>
        ))}
      </Motion>
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
        <p className="text-white/60 font-sans max-w-[400px] text-xs md:text-sm mt-0 md:mt-4">
          {whatWeDo.description}
        </p>
      </div>
    </article>
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
<p className="text-white font-sans text-xs sm:text-sm md:text-base">Ready to transform your digital dresence? Let&apos;s<br/> create magic together! book our services now!</p>
<Button className="rounded-full text-black bg-white hover:bg-white/80 font-sans mt-6 md:px-12 md:py-6 px-8 py-4 md:text-xl ">Book a call</Button>
      </article>
    </section>
  );
};

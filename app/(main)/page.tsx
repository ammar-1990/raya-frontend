import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import prisma from "@/lib/prisma";
import SectionWrapper from "@/components/section-wrapper";
import { colorsMapping, iconsMapping } from "@/types";
import { cn } from "@/lib/utils";
import { Service } from "@prisma/client";
import MotionWrapper from "@/components/motion-wrapper";
import { Variants } from "framer-motion";


//bg-[#D4F0FF]
//bg-[#FFDED4]
//bg-[#FFEED4]

export const revalidate = 0;

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pb-24">
      <div className="">
        <FirstSection />
      </div>
      <div className="mt-24">
        <ServicesSection />
      </div>
      <div className="mt-24">
        <AboutUs />
      </div>
    </main>
  );
}
 const FirstSection = () => {



   
  return (
    <SectionWrapper className="relative  min-h-screen flex items-center gap-6 ">
      <div className=" pt-8 flex-1   ">
        <h1 className="text-[38px] text-center md:text-start md:text-[55px] lg:text-[60px] 2xl:text-[87px] min-h-[130px] md:min-h-[160px] lg:min-h-[130px] xl:min-h-[160px] 2xl:min-h-[260px] flex flex-col leading-none text-font -mt-12">
          <MotionWrapper
            className="overflow-hidden"
            initial={{ height: 0, y: 20 }}
            whileInView={{
              y: 0,
              height: "auto",
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className=" font-bold">We Help you</span>
          </MotionWrapper>
          <MotionWrapper
            className="overflow-hidden"
            initial={{ height: 0, y: 20 }}
            whileInView={{
              y: 0,
              height: "auto",
              transition: { duration: 0.5, delay: 0.3 },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span>to grow your</span>
          </MotionWrapper>
          <MotionWrapper
            className="overflow-hidden"
            initial={{ height: 0, y: 20 }}
            whileInView={{
              y: 0,
              height: "auto",
              transition: { duration: 0.5, delay: 0.4 },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="relative w-fit mx-auto md:mx-0">
              {" "}
              Business
              <span className="absolute -left-2 md:-left-4 md:bottom-2 bottom-1 md:h-[18px] h-[8px] bg-yellow-500 w-full -z-10 " />
            </span>
          </MotionWrapper>
        </h1>
        <MotionWrapper
        initial={{x:-20,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5,delay:0.5}}
    viewport={{ once: true, amount: 0.2 }}
        >
          <p className="max-w-[550px] md:text-[14px] lg:text-[17px] text-font/90 mt-6 md:mt-12 mx-auto md:mx-0 text-[10px] text-center md:text-start ">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
       

        <Button
          variant={"site"}
          className="mt-6 px-24 !rounded-lg uppercase text-sm mx-auto md:mx-0 flex"
        >
          Get Started
        </Button>
        </MotionWrapper>
      </div>
      <div className="flex-1 lg:block hidden">
      <MotionWrapper
      initial={{y:20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.3}}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full aspect-[3/2.5]  ">
          <Image src={"/FirstImage.png"} alt="first image" fill className="" />
        </MotionWrapper>

      </div>
    </SectionWrapper>
  );
};



const ServicesSection = async () => {
  const services = await prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
    
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { stiffness: 200, type: "spring", damping: 8 },
    },
  };

  return (
    <SectionWrapper className="">
      <h3 className="text-[28px] text-center md:text-start md:text-[48px] flex flex-col leading-none text-font w-fit mx-auto  items-center">
        <span className=" font-bold">What We Do</span>
        <span>
          for your{" "}
          <span className="relative w-fit mx-auto md:mx-0">
            Business
            <span className="absolute -left-1 md:bottom-2 bottom-1 md:h-[10px] h-[8px] bg-yellow-500 w-full -z-10 " />
          </span>
        </span>
      </h3>

      <MotionWrapper
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-24 gap-8 relative items-stretch"
        initial="hidden"
        whileInView="show"
     
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <MotionWrapper variants={cardVariants} key={service.id}>
            <ServiceCard key={service.id} service={service} />
          </MotionWrapper>
        ))}
        <div className="absolute -right-24 top-1/2 -translate-y-[50%] w-[500px] h-[450px] -z-10 hidden md:block">
          <Image src={"/Ellipse.png"} alt="ellipse" fill />
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <article className="p-6 shadow-lg rounded-lg flex flex-col gap-2 bg-white h-full">
      <div
        className={cn(
          "flex items-center justify-center w-12 h-12 rounded-lg",
          colorsMapping[service.iconColor]
        )}
      >
        {iconsMapping[service.icon]}
      </div>
      <h3 className="uppercase font-bold">{service.label}</h3>
      <p className="text-sm text-gray-400 mt-auto">{service.description}</p>
    </article>
  );
};

const AboutUs = () => {
  return (
    <SectionWrapper className="flex px-4 gap-8">
      <MotionWrapper
      initial={{x:-20,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:0.1,stiffness: 200, type: "spring", damping: 8}}
      viewport={{ once: true, amount: 0.6 }}
      className="flex-1 hidden md:block">
        <div className="w-full aspect-square relative">
          <Image
            alt="about us"
            src={"/about-us.png"}
            className="object-contain"
            fill
          />
        </div>
      </MotionWrapper>
      {/* about text */}
      <MotionWrapper
       initial={{x:20,opacity:0}}
       whileInView={{x:0,opacity:1}}
       transition={{delay:0.1,stiffness: 200, type: "spring", damping: 8}}
       viewport={{ once: true, amount: 0.6 }}
      className="flex-1  flex items-center justify-center">
        <div className="flex flex-col gap-12">
          <h3 className="text-[48px] font-bold">
            About
            <span className="relative w-fit">
              {" "}
              Us
              <span className="absolute -left-2 md:-left-4 md:bottom-2 bottom-1 md:h-[8px] h-[8px] bg-yellow-500 w-full -z-10 " />
            </span>
          </h3>
          <div className="space-y-5 ">
          <p className="max-w-[350px] md:max-w-[550px] md:text-[14px] lg:text-[17px] text-font/90   mx-auto md:mx-0 text-[10px] ">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="max-w-[350px] md:max-w-[550px] md:text-[14px] lg:text-[17px] text-font/90   mx-auto md:mx-0 text-[10px] ">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          </div>
          <Button variant={'site'} className="uppercase w-fit sm:w-fit md:w-fit lg:w-fit xl:w-fit">Explore more</Button>
        
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
};

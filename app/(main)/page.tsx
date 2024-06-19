import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import  prisma  from "@/lib/prisma"
import SectionWrapper from "@/components/section-wrapper";
import { colorsMapping, iconsMapping } from "@/types";
import { cn } from "@/lib/utils";
import { Service } from "@prisma/client";





//bg-[#D4F0FF]
//bg-[#FFDED4]
//bg-[#FFEED4]



export const revalidate = 0

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pb-24">
      <div className="mt-32">
        <FirstSection />
      </div>
      <div className="mt-32">
        <ServicesSection/>
      </div>
    </main>
  );
}


























const FirstSection = () => {
  return (
    <SectionWrapper className="relative ">
      <h1 className="text-[38px] text-center md:text-start md:text-[87px] flex flex-col leading-none text-font -mt-12">
        <span className=" font-bold">We Help you</span>
        <span>to grow your</span>
        <span className="relative w-fit mx-auto md:mx-0">
          Business
          <span className="absolute -left-2 md:-left-4 md:bottom-2 bottom-1 md:h-[18px] h-[8px] bg-yellow-500 w-full -z-10 " />
        </span>
      </h1>
      <p className="max-w-[550px] md:text-[17px] text-font/90 mt-6 md:mt-12 mx-auto md:mx-0 text-[10px] text-center md:text-start ">
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book.
      </p>
      <Button
        variant={"site"}
        className="mt-6 px-24 !rounded-lg uppercase text-sm mx-auto md:mx-0 flex"
      >
        Get Started
      </Button>
      <div className="absolute -right-44 -top-32 w-[800px] aspect-[3/2.5] hidden xl:block">
        <Image src={"/FirstImage.png"} alt="first image" fill className="" />
      </div>
    </SectionWrapper>
  );
};







const ServicesSection = async() => {
  const services = await prisma.service.findMany()

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-24 gap-8">
        {services.map(service=><ServiceCard key={service.id} service={service}/>)}

      </div>
    </SectionWrapper>
  );
};



const ServiceCard = ({service}:{service:Service})=>{
  return (
    <article className="p-6 shadow-lg rounded-lg flex flex-col gap-2" >
          <div className={cn("flex items-center justify-center w-12 h-12 rounded-lg",colorsMapping[service.iconColor])}>
            {iconsMapping[service.icon]}
          </div>
          <h3 className="uppercase font-bold">{service.label}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
        </article>
  )
}

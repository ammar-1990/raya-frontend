import { cn } from "@/lib/utils";
import { ServiceItem } from "@prisma/client";
import Image from "next/image";
import React from "react";

type Props = {
  slug: string;
};

const ServiceItemsFeed = async ({ slug }: Props) => {
  const serviceItems = await prisma?.serviceItem.findMany({
    where: {
      service: {
        slug,
      },
    },
  });
  return (
    <div className="grid grid-cols-1 gap-8 p-12  relative">
   
      {serviceItems?.map((service,index) => {
        return <ItemCard  key={service.id}  service={service} index={index}/>;
      })}
          <div className="w-full h-[900px]"/>
    </div>

  );
};

export default ServiceItemsFeed;



const ItemCard  =({service,index}:{service:ServiceItem,index:number})=>{
return  <div style={{top:(index+1) * 30}} className="grid grid-cols-1 md:grid-cols-2 border max-w-[1100px] w-full mx-auto border-zinc-800 rounded-md overflow-hidden sticky  backdrop-blur-lg bg-backGround/60">
    <div className={cn("col-span-1 p-8 flex flex-col justify-center items-center",index %2 !==0 && 'md:order-1')}>
        <h3 className="text-white capitalize font-semibold font-sans text-3xl">{service.label || ''}</h3>
        <p className="  capitalize font-sans font-light  text-xs text-zinc-300">{service.description || ''}</p>

    </div>
    <div className=" col-span-1   relative aspect-square overflow-hidden">
    {!!service.image && <Image src={service.image} alt="img" fill className="object-cover  " />}
    <div className="absolute w-full h-full top-0 left-0 bg-black/80 backdrop-blur-sm  " />
{!!service.image && <Image src={service.image} alt="img2" fill className="object-contain max-w-[300px] mx-auto  " />}


    </div>

</div>

}
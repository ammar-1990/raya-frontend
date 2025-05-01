import React, { Suspense } from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header";
import PortfolioFeed from "@/components/PortfolioFeed";

type Props = {
  params: { slug: string };
};

const page = async ({ params: { slug } }: Props) => {
  const portfolio = await prisma.portfolio.findUnique({
    where: {
      slug,
    },
  });

  if (!portfolio) return notFound();
  const problemSolution = [
    { title: "Problem", desc: portfolio.problem },
    { title: "Solution", desc: portfolio.solution },
  ];

  const expainations = [
    {
      image: portfolio.firstExplainImage,
      description: portfolio.firstExplainText,
    },
    {
      image: portfolio.secondExplainImage,
      description: portfolio.secondExplainText,
    },
    {
      image: portfolio.thirdExplainImage,
      description: portfolio.thirdExplainText,
    },
    {
      image: portfolio.fourthExplainImage,
      description: portfolio.fourthExplainText,
    },
  ];
  return (
    <div className=" min-h-screen pb-28">
      {/* header */}
      <div className="">
    <Header firstWord={portfolio.title} secondWord="Project" descriptio={portfolio.escerpt} />
      </div>
   
      <div className="siteContainer">
           {/* image */}
      <div className="relative aspect-video  mt-12 ">
        <Image
          fill
          className="object-cover"
          alt="project-img"
          src={portfolio.mainImage}
        />
      </div>
      {/* problem and solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-8 ">
        {problemSolution.map((item, index) => (
          <div className="" key={index}>
            <h3 className="text-[#949494]">{item.title}</h3>
            <p className="text-xs text-[#949494] font-sans max-w-[400px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      {/* description */}
      <div className="grid grid-cols-1 md:grid-cols-5 mt-20 gap-8 ">
        <p className="col-span-5 md:col-span-4 text-white font-sans text-md">
          {portfolio.description}
        </p>
        <div className="col-span-5 md:col-span-1">
          <div className="flex items-center gap-1 ">
            <span className="text-[#949494] text-xs font-sans text-[9px]">YEAR</span>
            <span className="h-[1px] flex-1 bg-[#949494]"></span>
          </div>
          <span className="text-sm font-sans text-[#949494]">
            {portfolio.startDate.getFullYear()}
          </span>
        </div>
      </div>
      {/* explaination */}
      <div className="flex flex-col gap-12 mt-28 ">
        {expainations.map(({ description, image }, index) => {
          if (description && image) return <div key={index} className="flex gap-2 flex-col w-full  ">
            <div className="flex items-center gap-1">
                <span className="text-xs font-sans text-[#333333]">{String(index + 1).padStart(2,'0')}</span>
                <div className="flex-1 h-[1px] bg-[#333333] "></div>
            </div>
            {/* image */}
            <div className="w-full aspect-video relative ">
                <Image src={image} fill className="object-cover" alt="explaination-1" />
            </div>
            {/* descriptio */}
            <p className="text-[#FFFFFF80] text-xs font-sans">{description}</p>
          </div>;
        })}
      </div>
      {/* portfolios */}
      <div className="mt-12 ">
        <div className="flex mb-3 items-center gap-2">
          <span className="text-[#FFFFFF40] font-sans text-xs">See Also</span>
            <div className="flex-1 h-[0.5px] bg-[#FFFFFF40]" />
          </div>
<Suspense>
  <PortfolioFeed  id={portfolio.id}/>
</Suspense>
      </div>
      </div>
  
    </div>
  );
};

export default page;

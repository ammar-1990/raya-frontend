import React from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

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
    <div className="siteContainer min-h-screen pb-28">
      {/* header */}
      <div className="mt-12">
        <h1 className="flex items-center text-5xl font-sans font-[800] text-[#949494] gap-3">
          {portfolio.title}{" "}
          <span className="text-gradient_blur-end">Project</span>
        </h1>
        <p className="text-xs text-[#949494] font-sans mt-3">
          {portfolio.escerpt}
        </p>
      </div>
      {/* image */}
      <div className="relative aspect-video w-full mt-12">
        <Image
          fill
          className="object-cover"
          alt="project-img"
          src={portfolio.mainImage}
        />
      </div>
      {/* problem and solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-8">
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
      <div className="grid grid-cols-1 md:grid-cols-5 mt-20 gap-8">
        <p className="col-span-5 md:col-span-4 text-white font-sans text-md">
          {portfolio.description}
        </p>
        <div className="col-span-5 md:col-span-1">
          <div className="flex items-center gap-1 ">
            <span className="text-[#949494] text-xs font-sans">YEAR</span>
            <span className="h-[1px] flex-1 bg-[#949494]"></span>
          </div>
          <span className="text-sm font-sans text-[#949494]">
            {portfolio.startDate.getFullYear()}
          </span>
        </div>
      </div>
      {/* explaination */}
      <div className="flex flex-col gap-12 mt-28">
        {expainations.map(({ description, image }, index) => {
          if (description && image) return <div key={index} className="flex gap-2 flex-col w-full  ">
            <div className="flex items-center gap-1">
                <span className="text-xs font-sans text-[#333333]">{index + 1}</span>
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
    </div>
  );
};

export default page;

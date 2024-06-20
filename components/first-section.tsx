"use client";

import Image from "next/image";
import MotionWrapper from "./motion-wrapper";
import SectionWrapper from "./section-wrapper";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useMounted } from "@/contexts/mount-context";

export const FirstSection = () => {
  const { mounted, setMounted } = useMounted();
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!mounted) {
      timer = setTimeout(() => {
        setMounted(true);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [mounted, setMounted]);

  if (!mounted)
    return (
      <section className="h-screen">
        <div className="fixed top-0 left-0 h-screen w-full bg-gradient-to-b from-gradient-start to-gradient-end flex items-center justify-center  z-[9999999]">
          <h1 className="text-4xl text-white font-bold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">Raya</h1>
        </div>
      </section>
    );
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

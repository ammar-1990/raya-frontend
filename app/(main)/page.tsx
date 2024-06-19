import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="mt-32">
        <FirstSection />
      </div>
    </main>
  );
}

const FirstSection = () => {
  return (
    <section className="relative md:p-12 p-4">
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
<Button variant={"site"} className="mt-6 px-24 !rounded-lg uppercase text-sm mx-auto md:mx-0 flex">Get Started</Button>
      <div className="absolute -right-44 -top-32 w-[800px] aspect-[3/2.5] hidden xl:block">
        <Image src={"/FirstImage.png"} alt="first image" fill className="" />
      </div>
    </section>
  );
};

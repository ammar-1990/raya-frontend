import React, { ReactNode } from "react";
import NavLinks from "./navLinks";
import HamburgerSheet from "./hamburger-sheet";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

type Props = {
  firstWord?: string;
  secondWord?: string;
  descriptio?: string;
  children?: ReactNode;
};

const Header = ({ descriptio, firstWord, secondWord, children }: Props) => {
  return (
    <header className="pt-6 ">
      <div className="   bg-[#1F0144] backdrop-blur-md rounded-2xl  min-h-[400px] py-3 px-8 siteContainer">
        <div className=" ">
          {/* header part */}
          <div className="flex items-center justify-between">
            {/* logo */}
            <Link href={"/"}>
              <Logo />
            </Link>

            <div className="hidden md:block flex-1">
              <NavLinks />
            </div>
          </div>

          {/* content part */}
          <div className="flex flex-col mt-16 gap-10">
            {firstWord && secondWord && (
              <div className="flex items-center gap-1 text-5xl">
                <p
                  className="text-[#E9DEFE] text-[24px] sm:text-4xl  lg:text-4xl 
       3xl:text-7xl "
                >
                  {firstWord}
                </p>{" "}
                <p
                  className="text-[#8338EB] text-[24px] sm:text-4xl  lg:text-4xl 
       3xl:text-7xl"
                >
                  {secondWord}
                </p>
              </div>
            )}
            {children && children}
            {descriptio && (
              <p className="text-[#E5DAFB] text-sm font-sans text-[24px] max-w-[350px] text-wrap">
                {descriptio}
              </p>
            )}
          </div>
          {/* action */}
          <div className="mt-16 flex items-center justify-end">
            <div className="relative w-[75px] aspect-square ">
              <Image
                fill
                alt="scroll"
                src="/scroll-down.png"
                className="object-contain cursor-pointer"
              />
            </div>
          </div>
          {/* 
    <div className='md:hidden block'>
      <HamburgerSheet/>
    </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

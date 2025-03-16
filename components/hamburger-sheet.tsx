"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import SiteButton from "./site-button";

type Props = {};

const HamburgerSheet = (props: Props) => {
  const pathname = usePathname();
  const links = [
    {
      label: "Services",
      link: "/services",
      active: pathname === "/services",
    },
    {
      label: "Offers",
      link: "/offers",
      active: pathname === "/offers",
    },
    {
      label: "Pricing",
      link: "/pricing",
      active: pathname === "/pricing",
    },
    {
      label: "Blog",
      link: "/blog",
      active: pathname === "/blog",
    },
    {
      label: "Get Started",
      link: "",
      active: pathname === "",
      type: "Button",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger className="text-white">
        <GiHamburgerMenu />
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="h-screen bg-backGround flex items-center flex-col z-[9999] border-b-0 text-white overflow-hidden justify-center"
      >
     
          {links.map((link, index) => {
            if (link.type !== "Button")
              return (
                <SheetClose
                  asChild
                  className="p-8 w-full text-center"
                  key={link.label}
                >
                  <Link href={link.link} className="">
                    <motion.span
                    className="font-sans"
                      initial={{ opacity: 0, y: -30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.3 + 0.1 * index },
                      }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </SheetClose>
              );
            return (
              <SheetClose key={link.label}>
                  <motion.span
                      initial={{ opacity: 0, y: -30 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.3 + 0.1 * index },
                      }}
                    > <SiteButton fn={()=>{}}>{link.label}</SiteButton></motion.span> 
              </SheetClose>
            );
          })}
    
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerSheet;

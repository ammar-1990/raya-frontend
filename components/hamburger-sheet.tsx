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
  ];
  return (
    <Sheet>
      <SheetTrigger className="text-white">
        <GiHamburgerMenu />
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="min-h-screen bg-transparent border-b-0 text-white overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-backGround absolute inset-0 p-12 flex items-center flex-col text-white overflow-hidden"
        >
          {links.map((link,index) => (
            <SheetClose
              asChild
              className="p-8 w-full text-center"
              key={link.label}
            >
              <Link href={link.link} className="">
                <motion.span
                initial={{opacity:0,y:-30}}
                animate={{opacity:1,y:0,transition:{delay:0.3 + 0.1*index}}}
                >{link.label}</motion.span>
              </Link>
            </SheetClose>
          ))}
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerSheet;

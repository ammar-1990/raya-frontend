"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

type Props = {};

const NavLinks = (props: Props) => {
  const pathname = usePathname();
  const links = [
    {
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "Services",
      href: "/services",
      active: pathname.split("/")[1].includes("services"),
    },
    {
      label: "About Us",
      href: "/about-us",
      active: pathname.split("/")[1].includes("about-us"),
    },
    {
      label: "Contact Us",
      href: "/contact-us",
      active: pathname.split("/")[1].includes("contact-us"),
    },
  ];
  return (
    <nav >
      <ul className="flex items-center gap-12">
        {links.map((link) => (
          <li className="relative flex justify-center shrink-0" key={link.label}>
            <Link className={cn("select-none font-semibold",link.active && "text-center text-black relative z-10")} href={link.href}>{link.label}</Link>
            {link.active && <motion.div  layoutId="underline" className="h-[2px] w-[calc(100%+7px)] bg-yellow-500 bottom-1.5 absolute   "/>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SiteButton from "./site-button";
import { useContact } from "@/contexts/contact-context";
import { ArrowUpRight } from "lucide-react";

type Props = {};

const NavLinks = (props: Props) => {
  const { open, setOpen } = useContact();
  const pathname = usePathname();
  const links = [
    {
      label: "Services",
      link: "/#services",
      active: pathname === "#services",
    },
    {
      label: "Portfolio",
      link: "/portfolio",
     
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Contact us",
      link: "/contact",
    },
    //       {
    //       label:"Pricing",
    //       link:"/pricing",
    //       active:pathname==="/pricing"
    // },
    //       {
    //       label:"Blog",
    //       link:"blog",
    //       active:pathname==="/blog"
    // },
  ];
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-10   text-sm justify-end mx-auto">
        {links.map((link) => {
          return (
            <li key={link.label}>
              <Link href={link.link ?? ""} className="tracking-wider  font-[500] text-[#E9DEFF] flex items-center gap-1 text-[14px] font-sans">
                {link.label}
                <ArrowUpRight className="size-4"/>
              </Link>
            </li>
          );
        })}
      
      </ul>
      <SiteButton
            fn={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              e.preventDefault();
              setOpen(true);
              console.log(open);
            }}
            className="tracking-wider ml-auto text-[#E9DEFF]"
          >
          <span className="flex items-center gap-1 font-sans"> {"LET'S TALK "}<ArrowUpRight className="size-4"/></span>
          </SiteButton>
    </nav>
  );
};

export default NavLinks;

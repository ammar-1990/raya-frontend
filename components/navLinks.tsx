"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SiteButton from "./site-button";
import { useContact } from "@/contexts/contact-context";

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
    <nav>
      <ul className="flex items-center gap-16 text-white text-sm">
        {links.map((link) => {
          return (
            <li key={link.label}>
              <Link href={link.link ?? ""} className="tracking-wider font-sans">
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <SiteButton
            fn={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              e.preventDefault();
              setOpen(true);
              console.log(open);
            }}
            className="tracking-wider"
          >
            Get Started
          </SiteButton>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;

'use client'

import React, { HTMLAttributeReferrerPolicy, HTMLAttributes } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useContact } from "@/contexts/contact-context";

type Props = {
  title: string;
  className: string;
} & HTMLAttributes<HTMLButtonElement>;

const ClientButton = ({title, className, ...rest }: Props) => {
  const { setOpen } = useContact();
  return (
    <Button
      onClick={() => {
        setOpen(true);
      }}
      className={cn(
        `rounded-full text-black bg-white hover:bg-white/80 font-sans mt-6 md:px-12 md:py-6 px-8 py-4 md:text-xl `,
        className
      )}
    >
     {title}
    </Button>
  );
};

export default ClientButton;

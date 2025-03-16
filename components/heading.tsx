import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type Props = {
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

const Heading = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
  ...props
}: Props) => {
  return (
    <div className={cn("flex  flex-col ", props.className)}>
      <h3 className={cn("text-3xl font-bold capitalize text-white font-sans", titleClassName)}>{title}</h3>
      {description && (
        <p className={cn("text-muted capitalize text-sm font-light font-sans max-w-[350px] text-center", descriptionClassName)}>{description}</p>
      )}
    </div>
  );
};

export default Heading;

import React from "react";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Props = {
  id: string;
};

const PortfolioFeed = async ({ id }: Props) => {
  const portfolios = await prisma.portfolio.findMany({
    where: {
      NOT: {
        id,
      },
    },
    select: {
      id: true,
      slug: true,
      title: true,
      color: true,
      mainImage: true,
    },
  });
  return (
    <div className="flex flex-col gap-8">
      {portfolios.map((portfolio, index) => {
        return (
          <Link key={portfolio.id} href={`/portfolio/${portfolio.slug}`} className="transition hover:opacity-80">
            <div
              style={{ backgroundColor: portfolio.color ?? "white" }}
              className="p-[8px] flex items-center gap-4 "
            >
              {/* image */}
              <div className="relative w-[150px] aspect-video">
                <Image
                  src={portfolio.mainImage}
                  alt="portfolio image"
                  fill
                  className="object-cover"
                />
              </div>
              {/* title */}
              <p className="flex-1 text-[#00000081] ">{portfolio.title}</p>
              {/* icon */}
              <span>
                <ArrowUpRight className="size-6 text-[#00000081]" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PortfolioFeed;

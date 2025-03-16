import React from "react";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Heading from "@/components/heading";
import ServiceItemsFeed from "@/components/service-item/services-items-feed";
import Link from "next/link";
import { Home } from "lucide-react";

type Props = {
  params: { serviceSlug: string };
};

export const revalidate = 0

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await prisma.service.findUnique({
    where: {
      slug: params.serviceSlug,
    },
    select: {
      seoTitle: true,
      seoDescription: true,
    },
  });

  return {
    title: service?.seoTitle.toUpperCase(),
    description: service?.seoDescription,
    openGraph: {
      title: service?.seoTitle.toUpperCase(),
      description: service?.seoDescription,
    },
  };
}

const page = async ({ params }: Props) => {
  const service = await prisma.service.findUnique({
    where: {
      slug: params.serviceSlug,
    },
  });
  return (
    <div className="  min-h-screen  pt-24 ">
      <Link href={'/'} className="top-4 left-4 rounded-full bg-white w-12 h-12 fixed flex items-center justify-center z-50">
      <Home/>
      </Link>
      <Heading
        title={service?.label || "Service"}
        description={service?.description || ''}
        className="items-center justify-center"
      />

      <div className="mt-12">
        <ServiceItemsFeed slug={params.serviceSlug}/>
      </div>

    </div>
  );
};

export default page;

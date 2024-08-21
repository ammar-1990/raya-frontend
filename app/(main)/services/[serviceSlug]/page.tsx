import React from "react";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Heading from "@/components/heading";
import ServiceItemsFeed from "@/components/service-item/services-items-feed";

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
    <div className="  min-h-screen  pt-24">
      <Heading
        title={service?.label || "Service"}
        description={service?.description}
        className="items-center justify-center"
      />

      <div className="mt-12">
        <ServiceItemsFeed slug={params.serviceSlug}/>
      </div>

    </div>
  );
};

export default page;

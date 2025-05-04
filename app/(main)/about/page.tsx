"use client";

import Link from "next/link";
import {
  Rocket,
  Lightbulb,
  Handshake,
  Search,
  LayoutDashboard,
  Code2,
  Send,
} from "lucide-react";
import Header from "@/components/header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pb-40 ">
      <Header
        firstWord="About"
        secondWord="Us"
        descriptio="We build websites that drive results and help your business grow."
      />
      <div className="mt-40 siteContainer">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-square w-full">
            <div className="  aspect-square absolute left-0 top-0 rounded-xl overflow-hidden w-2/4 z-[2]">
              <Image
                src={"/whoWeAre2.png"}
                fill
                alt="who we are"
                className="object-cover "
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-[70%] rounded-full  bg-gradient-to-bl from-purple-600 via-indigo-500   aspect-square z-[1]  blur-lg  " />
            <div className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-[70%] rounded-full border aspect-square z-[1] border-[#ffffff0c]" />
            <div className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-[60%] rounded-full border aspect-square z-[1] border-[#ffffff0c]" />
            <div className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-[50%] rounded-full border aspect-square z-[1] border-[#ffffff0c]" />

            <div className="  aspect-square absolute right-0 bottom-0 rounded-xl overflow-hidden w-2/3 z-[2]">
              <Image
                src={"/whoWeAre.png"}
                fill
                alt="who we are"
                className="object-cover "
              />
            </div>
          </div>

          <div className="text-start ">
            <h1 className="text-sm  font-extrabold   mb-1 text-gradient_main-start">
              Who We Are
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans">
              At <span className="text-white font-semibold">YUMA</span>, we
              blend technology, strategy, and design to build custom digital
              experiences that drive real results. We work with startups and
              enterprises to craft products that are fast, scalable, and
              future-ready.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid md:grid-cols-3 gap-10 mt-40">
          <Card
            icon={<Rocket className="w-6 h-6 text-white " />}
            title="Our Mission"
          >
            To craft intelligent, scalable software that solves real-world
            challenges and empowers our clients to lead their industries.
          </Card>
          <Card
            icon={<Lightbulb className="w-6 h-6 text-white " />}
            title="Our Vision"
          >
            To become a global force in digital innovation by combining clean
            code, smart automation, and impactful design.
          </Card>
          <Card
            icon={<Handshake className="w-6 h-6 text-white " />}
            title="Our Values"
          >
            Collaboration, clarity, and craftsmanship — we build strong
            partnerships through honesty and high standards.
          </Card>
        </section>

        {/* Our Process */}
        <section className="mt-40">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessCard
              number={1}
              icon={<Search className="w-5 h-5 text-white" />}
              title="Discover"
            >
              We understand your goals, industry, and users before we build.
            </ProcessCard>
            <ProcessCard
              number={2}
              icon={<LayoutDashboard className="w-5 h-5 text-white" />}
              title="Design"
            >
              Wireframes and prototypes focused on clarity, usability, and
              beauty.
            </ProcessCard>
            <ProcessCard
              number={3}
              icon={<Code2 className="w-5 h-5 text-white" />}
              title="Develop"
            >
              Scalable, clean code built with modern tech and agile methodology.
            </ProcessCard>
            <ProcessCard
              number={4}
              icon={<Send className="w-5 h-5 text-white" />}
              title="Deliver"
            >
              Reliable launch, detailed QA, and long-term support for growth.
            </ProcessCard>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mt-40">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let’s Build Something Great
          </h2>
          <p className="text-gray-400 mb-8 font-sans">
            Ready to scale your ideas with smart, custom software?
          </p>
          <Link href="/contact">
            <button className="bg-gradient-to-t from-gradient_main-start to-gradient_main-end text-white  font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Get in Touch
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}

// Reusable card components

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#1c1c1c] p-6 rounded-xl hover:shadow-xl transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-full bg-gradient-to-t from-gradient_main-start to-gradient_main-end p-2  ">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed font-sans">
        {children}
      </p>
    </div>
  );
}

function ProcessCard({
  icon,
  title,
  children,
  number,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  number: number;
}) {
  return (
    <div className="bg-[#1c1c1c] p-5 rounded-lg hover:shadow-md transition h-full relative overflow-hidden">
    
      <div className="flex items-end gap-1.5 mb-2">
        <div className="text-5xl bg-gradient-to-t from-gradient_main-start to-gradient_main-end  aspect-square font-sans font-[800] text-transparent rounded-full bg-clip-text">
          {number}
        </div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
          {title}
        </h4>
      </div>
      <p className="text-sm text-gray-400 font-sans">{children}</p>
    </div>
  );
}

'use client';

import Link from 'next/link';
import {
  Rocket,
  Lightbulb,
  Handshake,
  Search,
  LayoutDashboard,
  Code2,
  Send
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-[#141414] text-gray-300 min-h-screen px-6 lg:px-20 py-24">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Who We Are</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            At <span className="text-white font-semibold">YUMA</span>, we blend technology, strategy, and design to build custom digital experiences that drive real results.
            We work with startups and enterprises to craft products that are fast, scalable, and future-ready.
          </p>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid md:grid-cols-3 gap-10">
          <Card icon={<Rocket className="w-6 h-6 text-white" />} title="Our Mission">
            To craft intelligent, scalable software that solves real-world challenges and empowers our clients to lead their industries.
          </Card>
          <Card icon={<Lightbulb className="w-6 h-6 text-white" />} title="Our Vision">
            To become a global force in digital innovation by combining clean code, smart automation, and impactful design.
          </Card>
          <Card icon={<Handshake className="w-6 h-6 text-white" />} title="Our Values">
            Collaboration, clarity, and craftsmanship — we build strong partnerships through honesty and high standards.
          </Card>
        </section>

        {/* Our Process */}
        <section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessCard icon={<Search className="w-5 h-5 text-white" />} title="Discover">
              We understand your goals, industry, and users before we build.
            </ProcessCard>
            <ProcessCard icon={<LayoutDashboard className="w-5 h-5 text-white" />} title="Design">
              Wireframes and prototypes focused on clarity, usability, and beauty.
            </ProcessCard>
            <ProcessCard icon={<Code2 className="w-5 h-5 text-white" />} title="Develop">
              Scalable, clean code built with modern tech and agile methodology.
            </ProcessCard>
            <ProcessCard icon={<Send className="w-5 h-5 text-white" />} title="Deliver">
              Reliable launch, detailed QA, and long-term support for growth.
            </ProcessCard>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let’s Build Something Great</h2>
          <p className="text-gray-400 mb-8">Ready to scale your ideas with smart, custom software?</p>
          <Link href="/contact">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
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
        <div className="bg-white/10 p-2 rounded-md">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">{children}</p>
    </div>
  );
}

function ProcessCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#1c1c1c] p-5 rounded-lg hover:shadow-md transition h-full">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-white/10 p-1.5 rounded-md">{icon}</div>
        <h4 className="text-sm font-semibold text-white uppercase tracking-wide">{title}</h4>
      </div>
      <p className="text-sm text-gray-400">{children}</p>
    </div>
  );
}

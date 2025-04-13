'use client'

import { useContact } from "@/contexts/contact-context"
import { Mail, MapPin, Phone } from "lucide-react"

type Props = {}

const ContactComponent = (props: Props) => {
     const {open,setOpen} = useContact()
  return (
    <main className="bg-[#141414] text-gray-300 min-h-screen px-6 lg:px-20 py-24">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Page Header */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Let’s Connect</h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto font-sans">
            Whether you have a project in mind or just want to chat — we’re here.
          </p>
        </section>

        {/* Contact Cards (Horizontal) */}
        <section className="flex flex-col md:flex-row items-center   gap-6">
          <ContactCard
            icon={<Mail className="w-5 h-5 text-white" />}
            title="Email"
            value="yuma.agency.software@gmail.com"
          />
          {/* <ContactCard
            icon={<Phone className="w-5 h-5 text-white" />}
            title="Phone"
            value="+971 50 000 0000"
          /> */}
          <ContactCard
            icon={<MapPin className="w-5 h-5 text-white" />}
            title="Location"
            value="Dubai, United Arab Emirates"
          />
        </section>

        {/* CTA Button */}
        <section className="text-center pt-6">
          <button
            onClick={() => {
              // Trigger your form sheet or modal here
             setOpen(true)
            }}
            className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Let&apos;s Talk
          </button>
        </section>

      </div>
    </main>
  )
}

export default ContactComponent


// Contact card component
function ContactCard({
    icon,
    title,
    value,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
  }) {
    return (
      <div className="bg-[#1c1c1c] w-full md:w-1/3 p-6 rounded-xl flex items-start gap-4 hover:shadow-xl transition flex-1">
        <div className="bg-white/10 p-2 rounded-md">{icon}</div>
        <div>
          <p className="text-sm font-semibold text-white mb-1">{title}</p>
          <p className="text-sm text-gray-400 break-words font-sans">{value}</p>
        </div>
      </div>
    );
  }
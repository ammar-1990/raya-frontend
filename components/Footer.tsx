import prisma from "@/lib/prisma";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export default async function Footer() {
  const services = await prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <footer className="bg-[#141414] text-gray-300 px-6 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Tagline */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">
            YUMA
          </h2>
          <p className="text-sm text-text leading-relaxed font-sans">
            We craft tailored software, seamless experiences, and smart
            automation — empowering brands to thrive in the digital era.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/services/${item.slug}`}
                  className="hover:text-white transition font-sans"
                >
                 {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition font-sans">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-white transition font-sans">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition font-sans">
                About Us
              </Link>
            </li>
         
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
            Contact
          </h3>
          <p className="text-sm text-text font-sans">yuma.agency.software@gmail.com</p>
          {/* <p className="text-sm text-text mt-1 font-sans">+971 50 000 0000</p> */}

          <div className="flex space-x-4 mt-4 ">
        
              <Link href="https://twitter.com/yourhandle" target="_blank">
              <FaTiktok className="hover:text-white  text-text size-6" />
              </Link>
              <Link href="https://instagram.com/yourhandle" target="_blank">
                <FaInstagram className="hover:text-[#E1306C] size-6 text-text" />
              </Link>
              <Link href="https://youtube.com/@yourchannel" target="_blank">
              <FaYoutube className="hover:text-red-600 transition size-6 text-text" />
              </Link>
      
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-text font-sans">
        © 2025 YUMA. Crafted with purpose.
      </div>
    </footer>
  );
}

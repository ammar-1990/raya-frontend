 

import ContactComponent from '@/components/ContactComponent';
import Header from '@/components/header';
import { FACEBOOK, INSTAGRAM, TIKTOK } from '@/types';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="pb-40">
      <Header firstWord='Contact' secondWord='Us' descriptio='We build websites that drive results and help your business grow.' />

      {/* contact us */}
      <section className='grid grid-cols-1 md:grid-cols-2 mt-12 siteContainer'>
        {/* left */}
        <div>

          <div className='flex items-center gap-3 bg-[#F6F8FA] rounded-full px-3 py-1 w-fit'>
      <Phone className='size-5 text-[#A05DF6]' />
      <span className='font-sans text-sm tracking-wide'>Contact US</span>
          </div>

          <h3 className='font-sans text-xl text-white mt-[40px] text-[50px]'>Get in Touch with Us</h3>

          <p className='text-white font-[400] font-sans  mt-[16px]'>We’re here to help to design, market and elevate your brand
          and answer any of your questions.</p>

          <div className='mt-[43px] flex flex-col  font-sans'>
            <span className='text-white font-[500]'>Email</span>
            <span className='text-white'>yuma.agency.software@gmail.com</span>
          </div>
          <div className='mt-[43px] flex flex-col  font-sans'>
            <span className='text-white font-[500]'>Follow Us</span>
            <div className="flex space-x-4 mt-4 ">
        
        <Link href={TIKTOK} target="_blank">
        <FaTiktok className="hover:text-white  text-text size-6" />
        </Link>
        <Link href={INSTAGRAM} target="_blank">
          <FaInstagram className="hover:text-[#E1306C] size-6 text-text" />
        </Link>
        <Link href={FACEBOOK} target="_blank">
          <FaFacebook className="hover:text-blue-600 size-6 text-text" />
        </Link>
        

    </div>
          </div>
        </div>
        {/* right */}
        <div></div>
      </section>


      {/* FAQ */}
      <section className='grid grid-cols-1 md:grid-cols-2'>
        {/* left */}
        <div></div>
        {/* right */}
        <div></div>
      </section>
  
    </div>

  );
}

 
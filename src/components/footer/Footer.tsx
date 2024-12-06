import Link from 'next/link';
import { TfiLinkedin } from 'react-icons/tfi';
import React, { useState } from 'react';

import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoWhatsapp,
  BiSolidDownload,
} from 'react-icons/bi';
import { Texts } from '@/lib/Texts2';

export default function Footer() {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const texts = Texts.en.footer;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPosition({ x, y });
  };

  return (
    <section
      className="footer w-full flex flex-col justify-center items-center relative bg-[#2C373D]"
      // style={{
      //   background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #20575d, #2c373d)`,
      // }}
      onMouseMove={handleMouseMove}
    >
      <section>
        <article className=" py-16 container flex flex-col gap-8 m-auto w-[80%] text-white text-center">
          <h2 className="font-semibold text-2xl">Start a project</h2>
          <p>
            Interested in working together? We should queue up a time to chat.
            I&#8216; ll buy the coffee.
          </p>
          <button className="py-2 px-6 rounded-full border border-white text-xl">
            Let&#8216; s do this
          </button>
          <aside className="w-full flex justify-center items-center gap-4 m-auto">
            {texts.contacts.map((e, i) => (
              <Link
                key={i}
                className="w-12 h-12 rounded-full border border-white flex justify-center items-center  hover:border-[#20575d] hover:bg-white hover:text-[#20575d] shadow-md cursor-pointer"
                href={e.href}
                target="_blank"
              >
                {e.alt === 'linkedin' && <TfiLinkedin className="w-5 h-5" />}
                {e.alt === 'github' && <BiLogoGithub className="w-6 h-6" />}
                {e.alt === 'curriculum' && (
                  <BiSolidDownload className="w-6 h-6" />
                )}
                {e.alt === 'gmail' && <BiLogoGmail className="w-5 h-5" />}
                {e.alt === 'whatsapp' && <BiLogoWhatsapp className="w-6 h-6" />}
              </Link>
            ))}
          </aside>
          <span className="text-white">Handcrafted by me &copy;</span>
        </article>
      </section>
    </section>
  );
}

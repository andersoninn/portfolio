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
import Contancts from '../Contacts';

export default function Footer() {
  const texts = Texts.en.footer;

  return (
    <section
      className="footer w-full flex flex-col justify-center items-center relative bg-[#222124]" id='footer'
    >
      <section>
        <article className=" py-16 container flex flex-col justify-center items-center gap-8 m-auto w-[80%] text-white text-center">
          <h2 className="font-semibold text-2xl">{texts.title}</h2>
          <p>
            {texts.description}
          </p>
          <button className="py-2 px-6 rounded-full border border-white text-xl hover:border-[#222124] hover:bg-white hover:text-[#222124]">
            {texts.button}
          </button>
          <aside className="w-full flex justify-center items-center gap-4 m-auto">
            <Contancts />
          </aside>
          <span className="text-white"> {texts.copy}&copy;</span>
        </article>
      </section>
    </section>
  );
}

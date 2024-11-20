'use client';
import Image from 'next/image';
import HomeLinkedin from '@/assets/image/home/homeLinkedin.svg';
import HomeGitHub from '@/assets/image/home/homeGithub.svg';
import HomeCurriculum from '@/assets/image/home/homeCurriculum.svg';

import { Texts } from '@/lib/Texts';
import Link from 'next/link';
import NavbarUI from '../ui/NavbarUI';

export default function Home2() {
  const HomeTextes = Texts.home;
  return (
    <>
    <NavbarUI></NavbarUI>
      <section className="bg-gradient-to-b from-[#0f9ffe] from-10% via-[#077AED] via-20% to-[#06283B] to-90% h-screen">
        <section
          id="home"
          className="flex justify-center m-auto pt-36 md:pt-46 pb-52 w-[85%] md:w-[90 %] md:pt-28 lg:w-full 
          max-w-[1240px]"
        > 
          <article className="font-extrabold text-center text-white text-4xl md:text-6xl flex flex-col justify-center">
            <h1 className="">Anderson Carvalho</h1>
            <div className="flex justify-center w-full text-medium font-normal ">
              <p className="text-end md:text-lg md:max-w-[400px]">
                Web and Software Developer
              </p>
            </div>
          </article>
        </section>
      </section>
      <section className="divisionHome" />
    </>
  );
}

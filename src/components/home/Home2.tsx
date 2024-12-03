'use client';
import 'animate.css';
import { Texts } from '@/lib/Texts2';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import NavbarUI from '../ui/NavbarUI';
import Image from 'next/image';

export default function Home2() {
  const texts = Texts.home;
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <>
      <section className="max-w-screen h-full bg-gradient-to-b from-cyan-500 to-blue-500 relative">
        <NavbarUI />
        <section className="bgHome">
          <section className="container w-[90%] m-auto min-h-[700px] pt-[30%] ">
            <article
              className="flex flex-col justify-center items-center text-white text-center"
            >
              <span>
                <h1 className='text-4xl font-extrabold'>{texts.name}</h1>
                <p> {texts.subtitle}</p>
              </span>





            </article>

            <article className='absolute -bottom-10 w-[90%] flex flex-col justify-center items-center text-center text-white animate__animated animate__fadeInUp'>
              <span>
                <h2 className='font-semibold text-xl'>{texts.calToAction}</h2>
                <p>{texts.subtitleCalToAction}</p>
              </span>
              <Image src="/iphone.png" width={200} height={120} alt="" className='-mt-28' />

            </article>

          </section>
        </section>
      </section>
    </>
  );
}

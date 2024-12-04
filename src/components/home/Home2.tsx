'use client';
import 'animate.css';
import { Texts } from '@/lib/Texts2';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowDown } from 'react-icons/hi2';

import NavbarUI from '../ui/NavbarUI';
import Image from 'next/image';

export default function Home2() {
  const texts = Texts.home;
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <>
      <section className="max-w-screen h-full shadow-xl md:pb-52">
        <NavbarUI />
        <section className="bgHome">
          <section className="container w-[90%] m-auto min-h-[700px] pt-[50%] md:pt-[10%]">
            <article className="flex flex-col justify-center items-center text-black text-center">
              <span>
                <p className="text-xl md:text-4xl animate__animated animate__fadeIn animate__delay-1s mb-2">
                  Because there is only one way
                </p>
                <p className="text-6xl md:text-[200px] font-extrabold animate__animated animate__fadeIn">
                  We&apos;ll Make
                </p>
                <p className="text-xl md:text-4xl animate__animated animate__fadeIn animate__delay-2s mt-2 md:-mb-2">
                  to make it to the next step
                </p>
                <p className="text-6xl md:text-[200px] md:text-9xl font-extrabold animate__animated animate__fadeIn">
                  {' '}
                  It work
                </p>
                <p className="text-xl md:text-4xl animate__animated animate__fadeIn animate__delay-3s">
                  {' '}
                  — nailing your mvp —
                </p>
              </span>
              <HiArrowDown className="w-6 h-6 absolute bottom-20 animate__animated animate__fadeIn animate__delay-4s" />
            </article>

            {/* <article className="absolute -bottom-10 w-[90%] flex flex-col justify-center items-center text-center text-white animate__animated animate__fadeInUp">
              <span>
                <h2 className="font-semibold text-xl">{texts.calToAction}</h2>
                <p>{texts.subtitleCalToAction}</p>
              </span>
              <Image
                src="/iphone.png"
                width={230}
                height={200}
                alt=""
                className="-mt-28"
              />
            </article> */}
          </section>
        </section>
      </section>
    </>
  );
}

'use client';
import 'animate.css';
import { Texts } from '@/lib/Texts2';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiArrowDown } from 'react-icons/hi2';

import NavbarUI from '../ui/NavbarUI';
import Image from 'next/image';
import Link from 'next/link';

export default function Home2() {
  const texts = Texts.en.home;
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <>
      <section className="max-w-screen h-full relative bgHome">
        <NavbarUI />
        <section className="">
          <section className="container w-[90%] my-16 m-auto min-h-[700px] md:min-h-screen flex flex-col items-center justify-around md:pb-16">
            {/* H1 */}
            <article className="flex flex-col justify-center items-center text-black text-center">
              <span>
                <p className="text-xl md:text-4xl animate__animated animate__fadeIn animate__delay-1s mb-2">
                  {texts.subtitle1}
                </p>
                <p className="text-6xl md:text-[200px] font-extrabold animate__animated animate__fadeIn">
                  {texts.title1}
                </p>
                <p className="text-xl md:text-4xl animate__animated animate__fadeIn animate__delay-2s md:mt-2 md:-mb-2">
                  {texts.subtitle2}
                </p>
                <p className="text-6xl md:text-[200px] md:text-9xl font-extrabold animate__animated animate__fadeIn">
                  {' '}
                  {texts.title2}
                </p>
                <p className="text-xl md:text-4xl animate__animated animate__fadeIn animate__delay-3s">
                  {' '}
                  {texts.subtitle3}
                </p>
              </span>
            </article>

            <Link
              href="#helloo"
              className="flex justify-center items-center md:pt-12 lg:pt-0"
            >
              <HiArrowDown className="w-6 h-6  lg:w-8 lg:h-8 animate__animated animate__fadeIn animate__delay-4s text-black/0" />
            </Link>
            <article className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] overflow-hidden absolute right-0 -bottom-[77px] md:-bottom-[144px]">
              {/* <motion.div
                initial={{ backgroundColor: '#2d3748' }}
                whileHover={{
                  backgroundColor: ['#dfdf65', '#20575d'],
                  transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                animate={{
                  backgroundColor: '#2d3748',
                  transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                className="bg-[#2d3748] hover:bg-[#20575d] a w-44 h-44 md:w-72 md:h-72 rounded-full translate-x-1/2"
              /> */}
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

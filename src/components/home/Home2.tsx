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
  const texts = Texts.home;
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <>
      <section className="max-w-screen h-full shadow-xl">
        <NavbarUI />
        <section className="bgPattern">
          <section className="container w-[90%] my-16 m-auto min-h-[700px] md:min-h-screen flex flex-col items-center justify-around relative md:pb-16">
            {/* H1 */}
            <article className="flex flex-col justify-center items-center text-black text-center">
              <span>
                <p className="text-xl md:text-4xl animate__animated animate__fadeIn animate__delay-1s mb-2">
                  Because there is only one way
                </p>
                <p className="text-6xl md:text-[200px] font-extrabold animate__animated animate__fadeIn">
                  We&apos;ll Make
                </p>
                <p className="text-xl md:text-4xl animate__animated animate__fadeIn animate__delay-2s md:mt-2 md:-mb-2">
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
            </article>

            <Link href='#helloo' className='flex justify-center items-center md:pt-12 lg:pt-0'>
              <HiArrowDown className="w-6 h-6  lg:w-8 lg:h-8 animate__animated animate__fadeIn animate__delay-4s" />

            </Link>
            <article>
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
                className="bg-[#2d3748] hover:bg-[#20575d] absolute -right-4 bottom-0 translate-x-1/2 translate-y-1/2 w-36 h-36 md:w-72 md:h-72 rounded-full"
              /> */}
            </article>

          </section>
        </section>
      </section>
    </>
  );
}

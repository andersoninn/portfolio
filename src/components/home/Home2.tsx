'use client';
import 'animate.css';
import { Texts } from '@/lib/Texts2';

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import NavbarUI from '../ui/NavbarUI';

export default function Home2() {
  const texts = Texts.home;
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <>
      <section className="max-w-screen h-full">
        <NavbarUI />
        <section className="flex justify-center overflow-x-hidden -mt-12 bg-blue-500 bgHome">
          <section className="container w-[90%] min-h-[700px] flex items-center text-left">
            <motion.article
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="z-10 text-[60px] font-extrabold flex flex-col -space-y-8 text-white"
            >
              <p>Lorem</p>
              <p>ipsum sit</p>
              <p>dolor amet</p>
              <p>consectetur</p>
              <p>adipiscing</p>
              <p>sit elit</p>
              <p>amet</p>
            </motion.article>
            <article className="max-w-screen animate__animated animate__fadeInRight -ml-[50%]">
              {/* <div className=" -translate-Y-1/2 rotate-45 min-w-[500px]  min-h-[500px] bg-blue-500 z-0" /> */}
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

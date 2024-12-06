import Image from 'next/image';
import { Texts } from '@/lib/Texts2';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import Slider from '../about/Slider';

export default function Resume2() {
  const texts = Texts.en.resume;

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const text = 'More about me';

  // Variantes de animação para o texto
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };
  return (
    <>
      <section className='bgPattern'>
        <section className="container -mb-32 h-[850px] m-auto flex max-w-[95%] flex-col items-center relative overflow-hidden">
          <motion.div
            id='helloo'
            ref={ref}
            className="text-7xl md:text-[200px] mt-16 font-extrabold uppercase"
          >
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={variants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <section className="w-[95%] absolute top-[25%] left-[50%] flex items-center justify-center m-auto">
            {/* full square */}
            <section className=" -translate-x-1/2 flex flex-col justify-center items-center">
              <article className="flex flex-col items-center justify-center text-center w-[80%] -mb-2">
                <h2 className="font-semibold text-2xl">{texts.top.title}</h2>
                <span className="space-y-2">
                  <h3 className="font-normal">{texts.top.subtitle}</h3>
                  <p>{texts.top.description}</p>
                </span>
              </article>
              <article>
                <Image
                  src="/diamond.png"
                  alt=""
                  width={600}
                  height={600}
                  className=""
                />
              </article>
              <section className="flex w-full -mt-[54%]">
                <article className="w-1/2 flex flex-col items-center justify-start text-center pr-2">
                  <h2 className="font-semibold text-2xl">{texts.left.title}</h2>
                  <span className="space-y-2">
                    <h3 className="font-normal">{texts.left.subtitle}</h3>
                    <p>{texts.left.description}</p>
                  </span>
                </article>
                <article className="w-1/2 flex flex-col items-center justify-center text-center pl-2">
                  <h2 className="font-semibold text-2xl">{texts.right.title}</h2>
                  <span className="space-y-2">
                    <h3 className="font-normal">{texts.right.subtitle}</h3>
                    <p>{texts.right.description}</p>
                  </span>
                </article>
              </section>
            </section>
          </section>

          <section className="w-full h-16 absolute -top-8" id="projects" />
        </section>
        {/* Slider */}
        <article className="">
          <Slider />
        </article>
      </section>
    </>
  );
}

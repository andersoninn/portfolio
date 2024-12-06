import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { Texts } from '@/lib/Texts';
import Slider from './Slider';
import { useInView } from 'react-intersection-observer';

export default function About2() {
  const AboutTexts = Texts.about;

  // Configuração para animar o texto
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const text = 'Helloo';

  // Variantes de animação para o texto
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      <section className="bgPattern relative overflow-x-hidden">
        <section className="cointainer m-auto w-[90%] min-h-[700px] flex justify-center items-center md:pt-56 md:pb-12">

          {/* Texto animado */}
          <motion.div
            id='helloo'
            ref={ref}
            className="absolute top-20 text-7xl md:text-[200px] font-bold text-black flex"
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

          <section className="flex flex-col justify-center items-center mt-4 md:mt-36 max-w-[900px]">
            <div className="w-[300px] h-[300px] rounded-full mt-44 bg-gray-100 flex items-center justify-center md:mt-2">
              <span>minha foto </span>
            </div>
            <p className="mt-12 lg:mt-24 text-gray-800 text-center text-lg md:text-xl">
              My name is <strong>Anderson Carvalho</strong> , I&apos;m a
              full-stack web and software developer with a passion for creating
              innovations that solve problems, with a special focus on user
              interactions. I&apos;m ready to bring your ideas to life and add a
              touch of originality to your online space.
            </p>
            <article className="w-full flex flex-col justify-end items-end mt-16 text-lg">
              <motion.div
                initial={{ backgroundColor: '#2d3748' }}
                whileHover={{
                  backgroundColor: ['#dfdf65', '#20575d'],
                  transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                animate={{
                  backgroundColor: '#2d3748',
                  transition: { duration: 0.5, ease: 'easeInOut' },
                }}
                className="bg-gray-800 absolute -left-0 -translate-x-1/2 w-32 h-32 md:w-44 md:h-44 rounded-full"
              />

              <span>
                <p className="text-gray-800 md:text-xl">
                  Let&apos;s make your{' '}
                </p>
                <p className="text-gray-800 md:text-xl mb-12">
                  project special!
                </p>
              </span>
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

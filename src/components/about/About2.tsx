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
      <section className="bgAbout bg-center relative">
        <section className="container m-auto w-[90%] min-h-[700px] flex justify-center items-center md:py-56 relative">
          <motion.div
            initial={{ backgroundColor: '#2d3748' }} // Cor inicial (gray-800)
            whileHover={{
              backgroundColor: ['#dfdf65', '#20575d'], // Transição de amarelo para verde
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            animate={{
              backgroundColor: '#2d3748', // Retorna para gray-800 após o hover
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            className="bg-[#2d3748] hover:bg-[#20575d] absolute -right-4 top-0 translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-72 md:h-72 rounded-full"
          />
          {/* <Image
            src="/aboutMacbooks.png"
            width={400}
            height={400}
            alt=""
            className="absolute -top-20 text-center"
          /> */}

          {/* Texto animado */}
          <motion.div
            ref={ref}
            className="absolute top-20 text-7xl font-bold text-gray-800 flex"
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

          <section className="flex flex-col justify-center items-center mt-4">
            <p className="text-gray-800 text-center text-lg">
              My name is <strong>Anderson Carvalho</strong> , I&apos;m a
              full-stack web and software developer with a passion for creating
              innovations that solve problems, with a special focus on user
              interactions. I&apos;m ready to bring your ideas to life and add a
              touch of originality to your online space.
            </p>
            <article className="w-full flex flex-col justify-end items-end mt-16 relative text-lg">
              <span className="bg-gray-800 absolute -left-4 -translate-x-1/2 translate-y-1/3 w-32 h-32 rounded-full" />

              <span>
                <p className="text-gray-800">Let&apos;s make your </p>
                <p className="text-gray-800">project special!</p>
              </span>
            </article>
          </section>

          {/* Slider */}
          {/* <article className="absolute bottom-0">
            <Slider />
          </article> */}
        </section>
      </section>
    </>
  );
}

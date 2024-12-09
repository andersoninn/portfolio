
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import SkillDiamond from './SkillDiamond';

export default function Resume2() {
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
      <section className='flex justify-center mt-16'>
        <section className="container h-[750px] flex max-w-[95%] flex-col items-center relative overflow-hidden">
          <motion.div
            id='helloo'
            ref={ref}
            className="uppercase text-4xl md:text-[200px] my-20 font-extrabold"
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
          </motion.div >
          <section className="translate-x-1/2 flex items-center justify-center">
            {/* full square */}
            <SkillDiamond />
          </section>

          <section className="w-full h-16 absolute -top-8" id="projects" />
        </section >
      </section >
    </>
  );
}

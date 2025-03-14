import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Texts } from '@/lib/Texts';
import ProjectItem from './ProjecItem';

export default function Projects() {
  const ProjectItens = Texts.en.projects;

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const text = 'Recent works';

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
    <section className="flex flex-col md:flex-row flex-wrap pb-24 bgProjects bg-center -mb-4 overflow-hidden -mt-80">
      <section className="container m-auto w-[90%] mt-80">
        <article className="flex justify-center text-center">
          <motion.div
            id="recentWorks"
            ref={ref}
            className="uppercase text-4xl md:text-6xl mt-20 font-extrabold"
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
        </article>

        <section className="md:flex flex-wrap gap-12 mt-12">
          {ProjectItens.length === 0 ? (
            <p>No project available.</p>
          ) : (
            ProjectItens.map((item, index) => (
              <ProjectItem key={index} item={item} index={index} />
            ))
          )}
        </section>
      </section>
    </section>
  );
}

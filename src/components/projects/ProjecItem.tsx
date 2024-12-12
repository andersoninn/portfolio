import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { PiLinkBold } from 'react-icons/pi';

interface ProjectItemProps {
  item: {
    image: string;
    nameOfProject: string;
    descriptionTitle: string;
    descriptionOfProject: string;
    techStacksTitle: string;
    techStacks: string[];
    oficialWebsite: string;
    callToAction: string;
  };
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ item, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={
        inView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      transition={{ duration: 0.5 }}
      className="m-auto flex flex-col items-center text-center gap-2 pb-12 max-w-[500px]"
    >
      <Image
        src={item.image}
        alt={item.nameOfProject}
        width={600}
        height={400}
      />
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col justify-center items-center max-w-[90%] gap-2"
      >
        <h1 className="text-xl font-semibold">{item.nameOfProject}</h1>
        <h2 className="text-lg">
          {item.descriptionOfProject}
        </h2>
        <p className="text-lg font-semibold">{item.techStacksTitle}</p>
        <article className="flex flex-wrap gap-2 justify-center">
          {item.techStacks.map((e) => (
            <button
              key={e}
              className="min-w-16 py-1 px-4 bg-transparent rounded-xl border border-black shadow-xl"
            >
              {e}
            </button>
          ))}
        </article>

        <Link
          href={item.oficialWebsite}
          target="_blank"
          className="flex gap-1 m-auto justify-center items-center text-blue-600 mt-2"
        >
          <PiLinkBold className="w-5 h-5 " />
          <span>{item.callToAction}</span>
        </Link>
      </motion.span>
    </motion.article>
  );
};

export default ProjectItem;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { PiLinkBold } from 'react-icons/pi';

interface ProjectItemProps {
  item: {
    image: string | StaticImageData;
    logo: string | StaticImageData;
    projectName: string;
    ProjectDescription: string;
    solution: string;
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
      <Image src={item.image} alt={item.projectName} width={600} height={400} />
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col justify-center items-center max-w-[90%] gap-2"
      >
        <section className="flex gap-2 text-left md:mx-4">
          <article className="w-3/4 md:w-4/5">
            <h1 className="text-xl font-semibold">{item.projectName}</h1>
            <p className=" font-light">{item.ProjectDescription}</p>
          </article>
          <article className="w-1/4 md:w-1/5 md:pl-4">
            <Image
              src={item.logo}
              alt={item.projectName}
              width={100}
              height={100}
            />
          </article>
        </section>
        <h2 className="text-lg !text-left md:mx-4">
          <span className="font-bold pr-2">Solution:</span>
          {item.solution.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h2>
        <article className="flex flex-wrap gap-2 md:mx-4 items-center">
          <p className="text-lg font-semibold !text-left">
            {item.techStacksTitle}
          </p>
          {item.techStacks.map((e, index) => (
            <p key={e}>
              {e}
              {index === item.techStacks.length - 1 ? '.' : ','}
            </p>
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

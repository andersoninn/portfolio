import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Texts } from "@/lib/Texts";

// Componente para renderizar cada projeto
const ProjectItem = ({ item, index }: { item: any; index: number }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.5 }}
      className="m-auto flex flex-col items-center text-center gap-2 pb-12 max-w-[500px]"
    >
      <Image src={item.image} alt={item.nameOfProject} width={600} height={400} />
      {/* Detalhes do projeto */}
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col justify-center"
      >
        <h1 className="text-xl font-semibold">{item.nameOfProject}</h1>
        <h2 className="text-lg">{item.descriptionOfProject}</h2>
        <Link href={item.oficialWebsite} target="_blank" className="flex gap-4 m-auto">
          {/* Ícone do link */}
          <Image src="/path/to/iconLink.svg" alt="Ícone de link" width={15} height={15} />
          <span className="text-blue-600">{item.callToAction}</span>
        </Link>
      </motion.span>
    </motion.article>
  );
};

// Componente principal
export default function Projects2() {
  const ProjectItens = Texts.projects; // Dados vindos da lib Texts

  return (
    <section className="flex flex-col md:flex-row flex-wrap py-52 bgProjects bg-center -mb-4">
      {ProjectItens.length === 0 ? (
        <p>Nenhum projeto disponível.</p>
      ) : (
        ProjectItens.map((item, index) =>
          <>
            <ProjectItem key={index} item={item} index={index} />
            <ProjectItem key={index} item={item} index={index} />
          </>)
      )}
    </section>
  );
}

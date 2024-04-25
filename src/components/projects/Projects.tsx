import Mockup from '@/assets/image/projects/mockupLeft.svg';
import iconLink from '@/assets/image/projects/icon link.svg';

import Image from 'next/image';
import RealProjectsModal from './modals/RealProjectsModal';

import { Texts } from '@/lib/Texts';

export default function Projects() {
  const ProjectItens = Texts.projects;
  return (
    <>
      <section className="bg-gradient-to-b from-[#D6C4E2] from-10% via-[#fadd99] via-30% to-[#B8AD94] to-70%">
        <section className="w-full">
          <section className="w-[85%] pt-36 md:pt-32 pb-10 flex flex-col m-auto max-w-[1240px]">
            <section className="flex flex-col md:flex-row flex-wrap">
              {ProjectItens.map((e, i) => (
                <>
                  <article className="m-auto flex flex-col items-center text-center gap-1 pb-12 max-w-[500px]">
                    <Image src={e.image} alt="" width={600} />
                    <h1>{e.nameOfProject}</h1>
                    <h2 className="font-bold">{e.descriptionOfProject}</h2>
                    <a href={e.oficialWebsite} className="flex gap-4 m-auto">
                      <Image src={iconLink} alt="" width={15} />
                      <span className="text-blue-600">Veja mais </span>
                    </a>
                  </article>
                </>
              ))}
            </section>
          </section>
        </section>

        <section className="w-full h-16 absolute -top-8" id="projects" />
      </section>
    </>
  );
}

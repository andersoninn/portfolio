import Mockup from '@/assets/image/projects/mockupLeft.svg';
import iconLink from '@/assets/image/projects/icon link.svg';

import Image from 'next/image';
import RealProjectsModal from './modals/RealProjectsModal';

import { Texts } from '@/lib/Texts';
import Link from 'next/link';

export default function Projects2() {
  const ProjectItens = Texts.projects;


  return (
    <>
      <section className="bgProjects bg-top">
        <section className="w-full">
          <section className="w-[85%] pt-36 md:pt-32 flex flex-col m-auto max-w-[1240px] py-52 -mb-2">
            <section className="flex flex-col md:flex-row flex-wrap">
              {ProjectItens.map((e, i) => (
                <article key={i} className={`m-auto flex flex-col items-center text-center gap-2 pb-12 max-w-[500px] animate__animated ${i % 2 == 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>

                  <Image src={e.image} alt="" width={600} />
                  <span className={`animate__animated ${i % 2 == 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'} animate__delay-0.2s flex flex-col justify-center`}>

                    <h1 className="text-xl font-semibold">{e.nameOfProject} </h1>
                    <h2 className=" text-lg">{e.descriptionOfProject}</h2>
                    <Link href={e.oficialWebsite} target="_blank" className="flex gap-4 m-auto">
                      <Image src={iconLink} alt="" width={15} />
                      <span className="text-blue-600">{e.callToAction}</span>
                    </Link>
                  </span>
                </article>
              ))}
            </section>
            <section className="flex flex-col md:flex-row flex-wrap">
              {ProjectItens.map((e, i) => (
                <article key={i} className={`m-auto flex flex-col items-center text-center gap-2 pb-12 max-w-[500px] animate__animated ${i % 2 == 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>

                  <Image src={e.image} alt="" width={600} />
                  <span className={`animate__animated ${i % 2 == 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'} animate__delay-0.2s flex flex-col justify-center`}>

                    <h1 className="text-xl font-semibold">{e.nameOfProject} </h1>
                    <h2 className=" text-lg">{e.descriptionOfProject}</h2>
                    <Link href={e.oficialWebsite} target="_blank" className="flex gap-4 m-auto">
                      <Image src={iconLink} alt="" width={15} />
                      <span className="text-blue-600">{e.callToAction}</span>
                    </Link>
                  </span>
                </article>
              ))}
            </section>

          </section>
        </section>

        <section className="w-full h-16 absolute -top-8" id="projects" />
      </section>
    </>
  );
}

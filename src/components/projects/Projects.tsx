import RealProjectsCarousel from './carousel/RealProjectsCarousel';
import RealProjectsModal from '@/components/projects/modals/RealProjectsModal';

import Mockup from '@/assets/image/projects/mockup.svg';
import iconLink from '@/assets/image/projects/icon link.svg';

import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#D6C4E2] from-10% via-[#fadd99] via-20% to-[#B8AD94] to-70%">
        <section className="w-full">
          <section className="w-[85%] pt-36 md:pt-32 pb-10 flex flex-col m-auto max-w-[1240px]">
            <section className="flex flex-col md:flex-row">
              <article className="m-auto flex flex-col items-center text-center gap-1">
                <Image src={Mockup} alt="" width={600} />
                <h1>Escola de Idiomas get Along</h1>
                <h2 className="font-bold">
                  Landing page com redirecionamento para outra plataforma
                  integrada a um chatboot para auto atendimento, configurado
                  pela equipe.
                </h2>
                <a href="" className="flex gap-4 m-auto">
                  <Image src={iconLink} alt="" width={15} />
                  <span className="text-blue-600">Veja mais </span>
                </a>
              </article>
              <article className="m-auto flex flex-col items-center text-center gap-1">
                <Image src={Mockup} alt="" width={600} />
                <h1>Escola de Idiomas get Along</h1>
                <h2 className="font-bold">
                  Landing page com redirecionamento para outra plataforma
                  integrada a um chatboot para auto atendimento, configurado
                  pela equipe.
                </h2>
                <a href="" className="flex gap-4 m-auto">
                  <Image src={iconLink} alt="" width={15} />
                  <span className="text-blue-600">Veja mais </span>
                </a>
              </article>
            </section>
            <section className="flex flex-col md:flex-row gap-12 mt-12">
              <article className="m-auto flex flex-col items-center text-center gap-1">
                <Image src={Mockup} alt="" width={600} />
                <h1>Escola de Idiomas get Along</h1>
                <h2 className="font-bold">
                  Landing page com redirecionamento para outra plataforma
                  integrada a um chatboot para auto atendimento, configurado
                  pela equipe.
                </h2>
                <a href="" className="flex gap-4 m-auto">
                  <Image src={iconLink} alt="" width={15} />
                  <span className="text-blue-600">Veja mais </span>
                </a>
              </article>
              <article className="m-auto flex flex-col items-center text-center gap-1">
                <Image src={Mockup} alt="" width={600} />
                <h1>Escola de Idiomas get Along</h1>
                <h2 className="font-bold">
                  Landing page com redirecionamento para outra plataforma
                  integrada a um chatboot para auto atendimento, configurado
                  pela equipe.
                </h2>
                <a href="" className="flex gap-4 m-auto">
                  <Image src={iconLink} alt="" width={15} />
                  <span className="text-blue-600">Veja mais </span>
                </a>
              </article>
            </section>

            {/* <section className="  flex flex-col md:flex-row m-auto gap-12 pt-6 max-w-[99%]">
              <section className="p-5 bg-gray-50 rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] overflow-x-hidden">
                <article className="flex flex-col items-center justify-center overflow-x-hidden">
                  <RealProjectsCarousel />
                </article>
                <article className="text-center text-lg -mt-4">
                  <h2 className="text-brand-blueTitle font-bold text-2xl">
                    Relevant and Real Projects <br />
                    NextJS & responsive coding
                  </h2>
                  <p className="pt-2">
                    Portfolio showcasing web projects using Next.js and
                    responsive coding. Highlights technical skills and
                    commitment to delivering practical solutions for real-world
                    challenges, ensuring engaging and innovative digital
                    experiences.
                  </p>
                </article>
                <aside className="flex justify-end">
                  <RealProjectsModal />
                </aside>
              </section>
            </section> */}
          </section>
        </section>

        <section className="w-full h-16 absolute -top-8" id="projects" />
      </section>
    </>
  );
}

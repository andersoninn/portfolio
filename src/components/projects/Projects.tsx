'use client';
import CompleteProjectsIcon from '@/assets/image/footer/completeProjectsIcon.svg';
import ExperienceIcon from '@/assets/image/footer/experienceIcon.svg';
import SatisfiedIcon from '@/assets/image/footer/satisfiedIcon.svg';

import Image from 'next/image';

import Carousel from './Carousel';
import ProjectModal from './modals/ProjectModal';

export default function Projects() {
   return (
      <section className="bg-gradient-to-t from-white from-0% via-white via-90% to-gray-200 to-100% relative">
         <section className="pt-8 pb-10 w-[90%] flex flex-col m-auto">
            <h2 className="text-brand-blue100 font-bold">Projects</h2>
            <h1 className="text-brand-blueTitle text-4xl font-black">
               Creative Soluctions
            </h1>

            <section className="  flex flex-col m-auto gap-12 pt-6 max-w-[99%]">
               {/* CARD 1 */}
               <section className="p-5 bg-brand-gray100 rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] overflow-x-hidden ">
                  <article className="">
                     <Carousel />
                  </article>
                  <article className="text-center text-lg -mt-4">
                     <h2 className="text-brand-blueTitle font-bold text-2xl">
                        Relevant and Real Projects <br />
                        NextJS & responsive coding
                     </h2>
                     <p className="pt-2">
                        Portfolio showcasing web projects using Next.js and
                        responsive coding. Highlights technical skills and
                        commitment to delivering practical solutions for
                        real-world challenges, ensuring engaging and innovative
                        digital experiences.
                     </p>
                  </article>
                  <aside className="flex justify-end">
                     <ProjectModal project="genesis" />
                  </aside>
               </section>

               {/* CARD 2 */}
               <section className="p-5 bg-brand-gray100 rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] overflow-x-hidden">
                  <article>
                     <Carousel />
                  </article>

                  <article className="text-center text-lg -mt-4">
                     <h2 className="text-brand-blueTitle font-bold text-2xl">
                        Study Projects <br />
                        Full-Stack coding
                     </h2>
                     <p className="pt-2">
                        Study Projects emphasizing Full-Stack Coding.
                        Demonstrates expertise in front-end and back-end
                        development. Explore my portfolio for diverse,
                        well-executed coding projects, showcasing technical
                        skills and practical solutions for real-world
                        challenges.
                     </p>
                  </article>
                  <aside className="flex justify-end">
                     <ProjectModal project="legacyChurch" />
                  </aside>
               </section>
            </section>
            {/* FOOTER */}
            <aside className="mt-10 flex m-auto justify-between w-full">
               <section className="flex-col gap-2">
                  <article className="flex gap-2">
                     <Image src={ExperienceIcon} width={48} alt="" />
                     <p className="text-brand-blueTitle font-bold text-2xl">
                        +1
                     </p>
                  </article>

                  <p className="text-xs font-bold text-center">
                     EXPERIENCE AS
                     <br />A FREELANCER
                  </p>
               </section>
               <section className="flex-col gap-2">
                  <article className="flex gap-2">
                     <Image src={SatisfiedIcon} width={42} alt="" />
                     <p className="text-brand-blueTitle font-bold text-2xl">
                        +10
                     </p>
                  </article>

                  <p className="text-xs font-bold text-center">
                     SATISFIED
                     <br />
                     CUSTOMERS
                  </p>
               </section>
               <section className="flex-col gap-2">
                  <article className="flex gap-2">
                     <Image src={CompleteProjectsIcon} width={40} alt="" />
                     <p className="text-brand-blueTitle font-bold text-2xl">
                        +30
                     </p>
                  </article>
                  <p className="text-xs font-bold text-center">
                     COMPLETED
                     <br />
                     PROJECTS
                  </p>
               </section>
            </aside>
         </section>
         <section className="w-full h-16 absolute -top-8" id="projects" />
      </section>
   );
}

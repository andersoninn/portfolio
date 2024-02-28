import RealProjectsCarousel from './carousel/RealProjectsCarousel';
import StudyProjectsCarousel from './carousel/StudyProjectsCarousel';
import RealProjectsModal from '@/components/projects/modals/RealProjectsModal';
import StudyProjectsModal from './modals/StudyProjectsModal';
import Footer from '../footer/Footer';

export default function Projects() {
   return (
      <section className="bg-gradient-to-t from-white from-0% via-white via-90% to-gray-200 to-100% relative">
         <section className="w-[90%] pt-8 pb-10 flex flex-col m-auto max-w-[1024px] ">
            <h2 className="text-brand-blue100 font-bold">Projects</h2>
            <h1 className="text-brand-blueTitle text-4xl font-black">
               Creative Soluctions
            </h1>
            <section className="  flex flex-col md:flex-row m-auto gap-12 pt-6 max-w-[99%]">
               {/* CARD 1 */}
               <section className="p-5 bg-brand-gray100 rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] overflow-x-hidden ">
                  <article className=" flex flex-col items-center">
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
                        commitment to delivering practical solutions for
                        real-world challenges, ensuring engaging and innovative
                        digital experiences.
                     </p>
                  </article>
                  <aside className="flex justify-end">
                     <RealProjectsModal />
                  </aside>
               </section>

               {/* CARD 2 */}
               <section className="p-5 bg-brand-gray100 rounded-lg flex flex-col gap-3 shadow-md max-w-[450px] overflow-x-hidden">
                  <article className="flex flex-col items-center">
                     <StudyProjectsCarousel />
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
                     <StudyProjectsModal />
                  </aside>
               </section>
            </section>
         </section>
         <Footer />

         <section className="w-full h-16 absolute -top-8" id="projects" />
      </section>
   );
}

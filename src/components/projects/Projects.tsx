import RealProjectsCarousel from './carousel/RealProjectsCarousel';
import RealProjectsModal from '@/components/projects/modals/RealProjectsModal';

export default function Projects() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#D6C4E2] from-10% via-[#fadd99] via-20% to-[#B8AD94] to-70%">
        <section className="w-full">
          <section className="w-[90%] pt-8 pb-10 flex flex-col m-auto max-w-[1024px]">
            <h2 className="text-brand-blue100 font-bold">Projects</h2>
            <h1 className="text-brand-blueTitle text-4xl font-black">
              Creative Soluctions
            </h1>
            <section className="  flex flex-col md:flex-row m-auto gap-12 pt-6 max-w-[99%]">
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
            </section>
          </section>
        </section>

        <section className="w-full h-16 absolute -top-8" id="projects" />
      </section>
    </>
  );
}



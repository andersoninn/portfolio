import ExperienceIcon from '@/assets/image/footer/experienceImage.svg';
import SatisfiedIcon from '@/assets/image/footer/satisfiedImage.svg';
import CompleteProjectsIcon from '@/assets/image/footer/completeProjectsImage.svg';
import Image from 'next/image';

export default function Projects() {
   return (
      <section className="py-20">
         <section className=" container m-auto px-[150px] bg-red-100">
            <h2 className="text-brand-blue100 font-bold">Projects</h2>
            <h1 className="text-brand-blueTitle text-4xl font-black">
               Creative Soluctions
            </h1>

            <section className="container m-auto flex gap-12 pt-12">
               <section className="p-5 w-full bg-brand-gray100 rounded-lg">
                  <article className="flex gap-4">
                     <div className="bg-brand-gray200 flex-1 w-[163px] h-[182px]">
                        a
                     </div>
                     <div className="bg-brand-gray200 flex-1">a</div>
                     <div className="bg-brand-gray200 flex-1">a</div>
                  </article>
                  <article className="text-center pt-4">
                     <h2 className="text-brand-blueTitle font-bold text-xl pb-3">
                        Relevant and Real Projects <br />
                        NextJS & responsive coding
                     </h2>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis vitae.
                     </p>
                  </article>
               </section>
               <section className="p-5 w-full bg-brand-gray100 rounded-lg">
                  <article className="flex gap-4">
                     <div className="bg-brand-gray200 flex-1 w-[163px] h-[182px]">
                        a
                     </div>
                     <div className="bg-brand-gray200 flex-1">a</div>
                     <div className="bg-brand-gray200 flex-1">a</div>
                  </article>
                  <article className="text-center px-10 pt-4">
                     <h2 className="text-brand-blueTitle font-bold text-xl pb-3">
                        Study Projects <br /> Full-Stack coding
                     </h2>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis vitae.
                     </p>
                  </article>
               </section>
            </section>
            <aside className="mt-12 bg-green-100 flex justify-around">
               <div className="bg-green-300 flex">
                  <Image src={ExperienceIcon} width={48} alt="" />
                  <div>
                     <p>+1</p>
                     <p>test</p>
                  </div>
               </div>
               <div className="bg-green-300">
                  <Image src={SatisfiedIcon} width={42} alt="" />
               </div>
               <div className="bg-green-300">
                  <Image src={CompleteProjectsIcon} width={40} alt="" />
               </div>
            </aside>
         </section>
      </section>
   );
}

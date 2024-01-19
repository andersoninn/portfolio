import ExperienceIcon from '@/assets/image/footer/medalha.svg';
import SatisfiedIcon from '@/assets/image/footer/smile.svg';
import CompleteProjectsIcon from '@/assets/image/footer/completeProjectsImage.svg';
import Image from 'next/image';

import { FaRegEye } from 'react-icons/fa';
import { IoCodeSlash } from 'react-icons/io5';

export default function Projects() {
   return (
      <section className="py-20">
         <section className=" container m-auto px-[150px]">
            <h2 className="text-brand-blue100 font-bold">Projects</h2>
            <h1 className="text-brand-blueTitle text-4xl font-black">
               Creative Soluctions
            </h1>

            <section className="container m-auto flex gap-12 pt-12">
               <section className="p-5 w-full bg-brand-gray100 rounded-lg">
                  <article className="flex gap-4">
                     <div className="bg-gradient-to-t from-blue-400 to-emerald-400 flex-1 w-[163px] h-[182px] flex gap-6 justify-center items-end rounded-lg">
                        <section className="bg-gray-600 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                           <FaRegEye className="text-gray-200 w-5 h-5" />
                        </section>
                        <section className="bg-gray-600 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                           <IoCodeSlash className="text-gray-200 w-5 h-5" />
                        </section>
                     </div>
                     <div className="bg-gradient-to-t from-blue-400 to-emerald-400 flex-1 w-[163px] h-[182px] flex gap-6 justify-center items-end rounded-lg">
                        <section className="bg-gray-600 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                           <FaRegEye className="text-gray-200 w-5 h-5" />
                        </section>
                        <section className="bg-gray-600 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                           <IoCodeSlash className="text-gray-200 w-5 h-5" />
                        </section>
                     </div>
                     <div className="bg-gradient-to-t from-blue-400 to-emerald-400 flex-1 w-[163px] h-[182px] flex gap-6 justify-center items-end rounded-lg">
                        <section className="bg-gray-600 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                           <FaRegEye className="text-gray-200 w-5 h-5" />
                        </section>
                        <section className="bg-gray-600 w-8 h-8 rounded-lg flex items-center justify-center mb-3">
                           <IoCodeSlash className="text-gray-200 w-5 h-5" />
                        </section>
                     </div>
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
            <aside className="mt-16 flex justify-around">
               <div className="flex gap-2 items-start">
                  <Image src={ExperienceIcon} width={48} alt="" />
                  <div>
                     <p className="text-brand-blueTitle font-bold text-2xl">
                        +1
                     </p>
                     <p className="text-xs font-bold">
                        EXPERIENCE AS
                        <br />A FREELANCER
                     </p>
                  </div>
               </div>
               <div className="flex gap-2 items-start">
                  <Image src={SatisfiedIcon} width={42} alt="" />
                  <div>
                     <p className="text-brand-blueTitle font-bold text-2xl">
                        +10
                     </p>
                     <p className="text-xs font-bold">
                        SATISFIED
                        <br />
                        CUSTOMERS
                     </p>
                  </div>
               </div>
               <div className="flex gap-2 items-start">
                  <Image src={CompleteProjectsIcon} width={40} alt="" />
                  <div>
                     <p className="text-brand-blueTitle font-bold text-2xl">
                        +30
                     </p>
                     <p className="text-xs font-bold">
                        COMPLETED
                        <br />
                        PROJECTS
                     </p>
                  </div>
               </div>
            </aside>
         </section>
      </section>
   );
}

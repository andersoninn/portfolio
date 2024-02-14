import Image from 'next/image';
import CompleteProjectsIcon from '@/assets/image/footer/completeProjectsIcon.svg';
import ExperienceIcon from '@/assets/image/footer/experienceIcon.svg';
import SatisfiedIcon from '@/assets/image/footer/satisfiedIcon.svg';

export default function Footer() {
   return (
      <>
         {/*  pt-8 pb-10 flex flex-col m-auto max-w-[1024px] */}
         <aside className="w-[90%] max-w-[1024px] pb-6 mt-10 flex m-auto justify-between ">
            <section className="flex-col gap-2">
               <article className="flex gap-2">
                  <Image src={ExperienceIcon} width={48} alt="" />
                  <section>
                     <p className="text-brand-blueTitle font-bold text-2xl text-center">
                        +1
                     </p>
                     <p className="text-brand-blueTitle font-bold -mt-2">
                        YEAR
                     </p>
                  </section>
               </article>

               <p className="text-xs font-bold text-center">
                  EXPERIENCE AS
                  <br />A FREELANCER
               </p>
            </section>
            <section className="flex-col gap-2">
               <article className="flex gap-2">
                  <Image src={SatisfiedIcon} width={42} alt="" />
                  <p className="text-brand-blueTitle font-bold text-2xl">+10</p>
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
                  <p className="text-brand-blueTitle font-bold text-2xl">+30</p>
               </article>
               <p className="text-xs font-bold text-center">
                  COMPLETED
                  <br />
                  PROJECTS
               </p>
            </section>
         </aside>{' '}
      </>
   );
}

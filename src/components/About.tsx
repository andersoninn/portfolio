import Image from 'next/image';

import AboutPicture from '@/assets/image/aboutPicture.svg';
import Elipses from '@/assets/image/aboutElipses.svg';
import DownloadCV from '@/assets/image/contacts/downloadCV.svg';
import Linkedin from '@/assets/image/contacts/linkedin.svg';
import Github from '@/assets/image/contacts/gitHub.svg';
import Gmail from '@/assets/image/contacts/gmail.svg';
import Instagran from '@/assets/image/contacts/instagran.svg';

export default function About() {
   return (
      <section className="py-20 bg-[url('../assets/image/aboutBg.svg')] bg-right-bottom bg-no-repeat ">
         <section className="container m-auto flex px-[150px] gap-12 ">
            <article className="relative w-full ">
               <Image
                  src={Elipses}
                  width="173"
                  height="235"
                  alt=""
                  className="-translate-x-1/2"
               />
               <Image
                  src={AboutPicture}
                  fill
                  sizes="width:100%"
                  alt=""
                  style={{ objectFit: 'cover' }}
                  className="rounded-md z-10"
               />
            </article>
            <article className="w-full">
               <h2 className="text-brand-blue100 font-bold">About Me</h2>
               <h1 className="text-brand-blueTitle text-4xl font-black">
                  <span className="-ml-5">“Discipline love and courage</span>{' '}
                  are the motors of success”
               </h1>
               <p className="pt-2 pr-6 text-balance">
                  As a former military professional, I excelled as the Secretary
                  to the Director of Aircraft, securing the second position in
                  my class. I made significant contributions in the Special
                  Infantry Battalion of Galeão, leading critical peacekeeping
                  missions and implementing operational regulations that
                  continue to endure. Opting for a move to Portugal in pursuit
                  of a life away from violence marked a significant turning
                  point. Currently, I am dedicatedly studying programming to
                  ensure a successful career transition, showcasing my
                  commitment to promising challenges and continuous growth.
               </p>

               <aside className="flex justify-between items-center mt-14 mx-16 pr-6 ">
                  <span className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30">
                     <Image src={DownloadCV} width={40} alt="" />
                  </span>
                  <span className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30">
                     <Image src={Linkedin} width={40} alt="" />
                  </span>
                  <span className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30">
                     <Image src={Github} width={40} alt="" />{' '}
                  </span>
                  <span className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30">
                     <Image src={Gmail} width={40} alt="" />
                  </span>
                  <span className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30">
                     <Image src={Instagran} width={40} alt="" />
                  </span>
               </aside>
            </article>
         </section>
      </section>
   );
}

import Image from 'next/image';

import AboutMePicture from '@/assets/image/aboutMe/aboutMePicture.svg';
import Elipses from '@/assets/image/aboutMe/aboutMeElipses.svg';
import DownloadCV from '@/assets/image/contacts/downloadCV.svg';
import Linkedin from '@/assets/image/contacts/linkedin.svg';
import Github from '@/assets/image/contacts/gitHub.svg';
import Gmail from '@/assets/image/contacts/gmail.svg';
import Instagran from '@/assets/image/contacts/instagran.svg';
import AboutMePolygons from '@/assets/image/aboutMe/aboutMePolygons.svg';

export default function About() {
   return (
      <section
         className="bg-gradient-to-t from-gray-200 from-0% via-gray-200 via-90% to-white to-100%      
         h-screen relative flex items-center justify-center py-16"
      >
         <section className="container flex gap-12 max-w-[1180px] px-24">
            <article className="relative w-full flex">
               <Image
                  src={Elipses}
                  width="173"
                  height="235"
                  alt=""
                  className=" -translate-x-1/2 absolute "
               />
               <Image
                  src={AboutMePicture}
                  width={450}
                  alt=""
                  className="rounded-md z-10 relative"
               />
            </article>
            <article className="w-full">
               <h2 className="text-brand-blue100 font-bold">About Me</h2>
               <h1 className="text-brand-blueTitle text-4xl font-black">
                  <span className="-ml-5">“Discipline love and courage</span>{' '}
                  are the motors of success”
               </h1>
               <p className="pt-2 pr-8 text-balance ">
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
               <div className="absolute">
                  <Image
                     src={AboutMePolygons}
                     alt=""
                     className="translate-x-[450px] -translate-y-20"
                  />
               </div>

               {/* CONTACTS */}
               <aside className="flex justify-between items-center mt-24 mx-16 pr-6 ">
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
         <section className="w-full h-16 absolute -top-8" id="about" />
      </section>
   );
}

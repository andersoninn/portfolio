import Image from 'next/image';

import AboutPicture from '@/assets/image/about/aboutPicture.svg';
import Elipses from '@/assets/image/about/aboutElipses.svg';
import DownloadCV from '@/assets/image/contacts/downloadCV.svg';
import Linkedin from '@/assets/image/contacts/linkedin.svg';
import Github from '@/assets/image/contacts/gitHub.svg';
import Gmail from '@/assets/image/contacts/gmail.svg';
import Instagran from '@/assets/image/contacts/instagran.svg';
import AboutPolygons from '@/assets/image/about/aboutPolygons.svg';

// adjust the polygons im background

export default function About2() {
   return (
      <section
         className="bg-gradient-to-t from-gray-200 from-0% via-gray-200 via-90% to-white to-100%      
         md:h-screen overflow-hidden"
      >
         <section className="container mx-6">
            <article>
               <h2 className="text-brand-blue100 font-bold">About Me</h2>
               <h1 className="text-brand-blueTitle text-4xl font-black">
                  <span className="">&ldquo;Discipline love and courage</span>
                  are the motors of success&rdquo;
               </h1>
            </article>
            <article className="pt-3">
               <Image
                  src={Elipses}
                  width="173"
                  height="235"
                  alt=""
                  className="absolute translate-x-2 w-24"
               />
               <Image
                  src={AboutPicture}
                  width={450}
                  alt=""
                  className="w-2/3 -translate-x-6 m-auto"
               />
            </article>
            <article>
               <p className="pt-3 mr-12 text-justify text-lg">
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
               {/* <div className="absolute">
                  <Image src={AboutPolygons} alt="" />
               </div> */}

               {/* CONTACTS */}
               <aside className="flex justify-around items-center mt-10 mr-12 m-auto ">
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

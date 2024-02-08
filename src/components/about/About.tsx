import Image from 'next/image';

import AboutPicture from '@/assets/image/about/aboutPicture.svg';
import Elipses from '@/assets/image/about/aboutElipses.svg';
import DownloadCV from '@/assets/image/contacts/downloadCV.svg';
import Linkedin from '@/assets/image/contacts/linkedin.svg';
import Github from '@/assets/image/contacts/gitHub.svg';
import Gmail from '@/assets/image/contacts/gmail.svg';
import Instagran from '@/assets/image/contacts/instagran.svg';

import PolygonLeft from '@/assets/image/about/aboutPolygons.svg';
import PolygonRight from '@/assets/image/about/aboutPolygons.svg';

export default function About() {
   return (
      <section
         className="bg-gradient-to-t from-gray-200 from-0% via-gray-200 via-90% to-white to-100% flex 
      m-auto relative "
      >
         <section className="w-[90%] m-auto pt-8 pb-10 max-w-[1024px]">
            <section className="lg:mx-[2%]">
               <article>
                  <h2 className="text-brand-blue100 font-bold">About Me</h2>
                  <h1 className="text-brand-blueTitle text-4xl font-black text-center md:text-left">
                     <span>&ldquo;Discipline love and courage&nbsp;</span>
                     are the motors of success&rdquo;
                  </h1>
               </article>
               <article className="mt-3 relative float-left md:-left-12">
                  <Image
                     src={AboutPicture}
                     width={450}
                     alt=""
                     className="w-2/3 m-auto z-10 relative md:w-64 md:ml-12 md:-mx-7"
                  />
                  <Image
                     src={Elipses}
                     width="173"
                     height="235"
                     alt=""
                     className="w-1/3 absolute top-0 left-3 z-0 md:w-20"
                  />
               </article>
               <article>
                  <p className="pt-3 text-center text-lg md:text-left">
                     As a former military professional, I excelled as the
                     Secretary to the Director of Aircraft, securing the second
                     position in my class. I made significant contributions in
                     the Special Infantry Battalion of Galeão, leading critical
                     peacekeeping missions and implementing operational
                     regulations that continue to endure. Opting for a move to
                     Portugal in pursuit of a life away from violence marked a
                     significant turning point. Currently, I am dedicatedly
                     studying programming to ensure a successful career
                     transition, showcasing my commitment to promising
                     challenges and continuous growth.
                  </p>
               </article>
            </section>
            {/* CONTACTS */}
            <aside className="flex justify-around items-center mt-6 m-auto md:mt-10">
               <a
                  className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
                  href="https://www.linkedin.com/in/andersoninn/"
                  target="_blank"
               >
                  <Image src={Linkedin} width={40} alt="" />
               </a>
               <a
                  className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
                  href="https://github.com/andersoninn"
                  target="_blank"
               >
                  <Image src={Github} width={40} alt="" />
               </a>
               <a
                  className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
                  href="https://imgb.ifunny.co/images/40011437ff899cc50315b88587abcb53ab727eddcce359da89757af65955af1c_1.jpg"
                  target="_blank"
               >
                  <Image src={DownloadCV} width={40} alt="" />
               </a>
               <a
                  className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
                  href="https://mailto:andersoninnocencio17@gmail.com/"
                  target="_blank"
               >
                  <Image src={Gmail} width={40} alt="" />
               </a>
               <a
                  className="cursor-pointer rounded-xl hover:shadow-brand-blue100/50 shadow-md shadow-black/30"
                  href="https://www.instagram.com/anderson.inn/"
                  target="blank"
               >
                  <Image src={Instagran} width={40} alt="" />
               </a>
            </aside>
            <article className="flex justify-between items-center pt-14">
               <Image
                  src={PolygonLeft}
                  width={70}
                  alt=""
                  className="absolute bottom-10 left-0"
               />
               <Image
                  src={PolygonRight}
                  width={70}
                  alt=""
                  className="absolute bottom-10 right-0"
               />
            </article>
         </section>

         <section className="w-full h-16 absolute -top-8" id="about" />
      </section>
   );
}

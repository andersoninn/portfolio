'use client';
import Image from 'next/image';
import { PiChatsTeardropDuotone } from 'react-icons/pi';
import HomePicture from '@/assets/image/home/homePicture.svg';
import HomeEllipse from '@/assets/image/home/homeEllipse.svg';

import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';

import Resume from '@/components/resume/Resume';

export default function Page() {
   return (
      <>
         <section
            id="home"
            className="flex justify-center m-auto pt-80 pb-14 w-full overflow-x-hidden max-w-[1024px]"
         >
            <article className="-mt-4 w-[90%] lg:w-full">
               <Image
                  src={HomeEllipse}
                  width={100}
                  alt=""
                  className="-left-20 top-24 absolute"
               />
               <section className="relative">
                  {/* <h1 className="text-brand-blueTitle text-7xl max-[360px]:text-6xl font-bold flex flex-col text-wrap lg:mx-[2%]">
                     <article className="flex flex-col md:flex-row">
                        <span className="w-40 ">Hey,</span>
                        <span>I&apos;m</span>
                     </article>
                     <span className="text-brand-blue100" translate="no">
                        Front-End
                     </span>
                     <span translate="no">Developer </span>
                  </h1> */}
                  <h1
                     className="text-brand-blueTitle text-7xl max-[360px]:text-6xl font-bold flex flex-col text-wrap lg:mx-[2%]"
                     translate="no"
                  >
                     <article className="flex flex-col md:flex-row text-brand-blue100">
                        <span className="pr-4"> Front</span>
                        <span>End</span>
                     </article>
                     <span>Developer </span>
                  </h1>
                  <Image
                     src={HomePicture}
                     alt=""
                     className="absolute w-80 -top-60 left-36 
                     md:2/4 md:-top-10 md:left-[60%]
                     lg:w-2/4 lg:lg:-top-64 lg:left-[50%]"
                  />
               </section>
               <p className="pt-4 pl-2 md:text-medium text-lg lg:mx-[2%]">
                  My name is&nbsp;
                  <span className="text-brand-blueTitle hover:text font-bold md:text-medium text-lg">
                     Anderson Carvalho.
                  </span>
               </p>
               <p className="pl-2 md:text-medium text-lg md:w-3/5 lg:w-3/5 lg:mx-[2%] lg:pr-20">
                  Former Special Infantry soldier shifting to programming in
                  Portugal. Committed to growth, eager to contribute and enhance
                  my skills with a new team.
               </p>
               <aside className="flex justify-around p-2 md:w-2/3">
                  <button
                     className="mt-6 text-white bg-brand-blue100 font-bold min-w-40 py-2 rounded-lg shadow
                  shadow-brand-blue200"
                  >
                     <a href="#resume">Hire Me!</a>
                  </button>
                  <button
                     className="mt-6 text-brand-blue100 font-bold min-w-40 py-2 rounded-lg shadow
                   shadow-brand-blue200"
                  >
                     <a
                        href="https://wa.me/351933864893"
                        target="_blank"
                        className="flex gap-1 justify-center items-center"
                     >
                        <PiChatsTeardropDuotone
                           width={10}
                           className="text-brand-blue100 "
                        />
                        Let&apos;s Chat
                     </a>
                  </button>
               </aside>
            </article>
         </section>
         <About />
         <Resume />
         <Projects />
      </>
   );
}

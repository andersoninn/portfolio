import Image from 'next/image';
import { PiChatsTeardropDuotone } from 'react-icons/pi';
import HomePicture from '@/assets/image/home/homePicture.svg';
import HomeEllipse from '@/assets/image/home/homeEllipse.svg';

import About from '@/components/about/About';
import Projects from '@/components/projects/Projects';

import Resume from '@/components/resume/Resume';

// Adjust in navbar -sticky our fixed
// Adjust in gradient bg (Home to About/ About to Projects)

export default function Page() {
   return (
      <>
         <section
            id="home"
            className="flex justify-center m-auto pt-80 pb-10 min-h-screen w-full overflow-x-hidden max-w-[1024px]"
         >
            <article className="-mt-4 w-[90%] lg:w-full">
               <Image
                  src={HomeEllipse}
                  width={100}
                  alt=""
                  className="-left-20 top-24 absolute"
               />
               <section className="relative">
                  <h1
                     className="text-brand-blueTitle text-7xl max-[360px]:text-6xl font-bold flex flex-col text-wrap lg:ml-[2%]"
                     translate="no"
                  >
                     <article className="flex flex-col md:flex-row">
                        <span className="w-40 ">Hey,</span>
                        <span>I&apos;m a</span>
                     </article>
                     <span className="text-brand-blue100">Front-End</span>
                     Developer
                  </h1>
                  <Image
                     src={HomePicture}
                     alt=""
                     className="absolute w-80 -top-60 left-32 
                     min-[632px]:w-2/4 min-[632px]:-top-10 min-[632px]:left-[50%]
                     md:-top-44
                     lg:-top-64                   
                    "
                  />
               </section>
               <p className="pt-4 pl-2 md:text-medium text-lg lg:ml-[2%]">
                  My name is&nbsp;
                  <span className="text-brand-blueTitle hover:text font-bold md:text-medium text-lg">
                     Anderson Carvalho.
                  </span>
               </p>
               <p className="pl-2 md:text-medium text-lg md:w-3/5 lg:w-3/5 lg:ml-[2%]">
                  Former Special Infantry soldier shifting to programming in
                  Portugal. Committed to growth, eager to contribute and enhance
                  my skills with a new team.
               </p>
               <aside className="flex justify-around p-2 ">
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

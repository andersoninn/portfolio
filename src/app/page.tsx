import Image from 'next/image';
import { PiChatsTeardropDuotone } from 'react-icons/pi';
import HomePicture from '@/assets/image/home/homePicture.svg';
import HomeEllipse from '@/assets/image/home/homeEllipse.svg';

import About from '@/components/About';
import Projects from '@/components/Projects';

// Adjust in navbar -sticky our fixed
// Adjust in gradient bg (Home to About/ About to Projects)

export default function Page() {
   return (
      <>
         <section
            id="home"
            className="flex justify-center pt-80 pb-10 min-h-screen w-full overflow-x-hidden"
         >
            <article>
               <div>
                  <Image
                     src={HomeEllipse}
                     width={100}
                     alt=""
                     className="-left-20 top-24 absolute"
                  />
               </div>
            </article>
            <article className="-mt-4 w-[90%]">
               <section className="relative">
                  <h1 className="text-brand-blueTitle text-7xl max-[360px]:text-6xl font-bold flex flex-col text-wrap ">
                     <span className=" min-w-40 w-40">
                        Hey, <br /> I&apos;m a
                     </span>
                     <span className="text-brand-blue100">Front-End</span>
                     Developer
                  </h1>
                  <Image
                     src={HomePicture}
                     alt=""
                     className="absolute w-80 -top-56 left-32"
                  />
               </section>
               <p className="pt-4 pl-2 md:text-medium text-lg">
                  My name is&nbsp;
                  <span className="text-brand-blueTitle hover:text font-bold md:text-medium text-lg">
                     Anderson Carvalho.
                  </span>
               </p>
               <p className="pl-2 md:text-medium text-lg">
                  Former Special Infantry soldier shifting to programming in
                  Portugal. Committed to growth, eager to contribute and enhance
                  my skills with a new team.
               </p>
               <aside className="flex justify-between p-2">
                  <button
                     className="md:hover:drop-shadow-brandShadow md:hover:text-white
                  md:hover:bg-brand-blue200
                  mt-6 text-white font-bold bg-brand-blue100 w-36 py-2 rounded-lg    drop-shadow-brandShadow"
                  >
                     Hire Me!
                  </button>
                  <button
                     className="md:hover:text-sky-400 md:hover:drop-shadow-brandShadow
                  mt-6 text-brand-blue100 font-bold bg-white w-36 py-2 rounded-lg 
                  flex gap-1 justify-center items-center drop-shadow-brandShadow"
                  >
                     <PiChatsTeardropDuotone
                        width={10}
                        className="text-brand-blue100 "
                     />
                     Let&apos;s Chat
                  </button>
               </aside>
            </article>
         </section>
         <About />
         <Projects />
      </>
   );
}

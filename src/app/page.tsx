import Image from 'next/image';
import { PiChatsTeardropDuotone } from 'react-icons/pi';
import HomePicture from '@/assets/image/home/homePicture.svg';

import HomePolygons from '@/assets/image/home/homePolygons.svg';
import About2 from '@/components/About2';
import Projects2 from '@/components/Projects2';

// Adjust in navbar -sticky our fixed
// Adjust in gradient bg (Home to About/ About to Projects)

export default function Page() {
   return (
      <>
         <section id="home" className="absolute top-0 "></section>
         <section className="flex pt-80 pb-10 px-6 min-h-screen relative overflow-hidden bg-red-100">
            <section>
               <section className="m-auto flex">
                  <article>
                     <div>
                        <Image
                           src={HomePolygons}
                           width={130}
                           alt=""
                           className="-translate-x-40 -translate-y-16 absolute hidden md:block"
                        />
                     </div>
                  </article>
                  <article className="-mt-4 ">
                     {/* <h1 className="text-brand-blueTitle text-6xl font-bold">
                        <span className="pr-44">Hey, </span>
                        <span>I&apos;m a</span>
                        <span className="text-brand-blue100 block">
                           Front-End
                        </span>
                        <span className="block">Developer</span>
                     </h1> */}
                     <section className='relative'>
                        <h1 className="text-brand-blueTitle text-7xl font-bold flex flex-col ">
                           Hey, <span>I&apos;m a</span>
                           <span className="text-brand-blue100">Front-End</span>
                           Developer
                        </h1>
                        <Image
                        src={HomePicture}
                        alt=""
                        className="absolute w-80 -right-1/3 -top-2/3"
                     />
                     </section>
                     <p className="pt-4 pl-2 md:text-medium text-lg">
                        My name is&nbsp;
                        <span className="text-brand-blueTitle hover:text font-bold md:text-medium text-lg">
                           Anderson Carvalho.
                        </span>
                     </p>
                     <p className="pl-2 md:text-medium text-lg">
                        Former Special Infantry soldier shifting to programming
                        in Portugal. Committed to growth, eager to contribute
                        and enhance my skills with a new team.
                     </p>
                     <aside className="flex justify-around p-2">
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
                  <article>
                     
                  </article>
               </section>
            </section>
         </section>
         <About2 />
         <Projects2 />
      </>
   );
}

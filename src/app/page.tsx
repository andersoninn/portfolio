import Image from 'next/image';
import { PiChatsTeardropDuotone } from 'react-icons/pi';
import HomePicture from '@/assets/image/home/homePicture.svg';

import HomePolygons from '@/assets/image/home/homePolygons.svg';
import About from '@/components/About';
import Projects from '@/components/Projects';

// Adjust in navbar -sticky our fixed
// Adjust in gradiente bg (Home to About/ About to Projects)

export default function Page() {
   return (
      <>
         <section
            className="md:bg-left
            bg-[url('../assets/image/home/homeBg.svg')] bg-no-repeat min-h-screen pt-16 relative bg-red-100"
            id="home"
         >
            <section
               className="md:pt-20 md:max-w-[1180px]
            container m-auto pt-44 max-w-[412px]  px-6"
            >
               <section
                  className="md:px-24 
               container m-auto flex  "
               >
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
                  <article className="w-1/2">
                     <h1
                        className="md:text-8xl
                     text-brand-blueTitle text-5xl font-bold"
                     >
                        Hey, I&apos;m a
                        <span className="text-brand-blue100 block">
                           Front-End
                        </span>
                        <span className="block">Developer</span>
                     </h1>
                     <p className="pt-4 pl-2">
                        My name is{' '}
                        <span className="text-brand-blueTitle hover:text font-bold">
                           {' '}
                           Anderson Carvalho.
                        </span>
                     </p>
                     <p className="pl-2">
                        Former Special Infantry soldier shifting to programming
                        in Portugal. Committed to growth, eager to contribute
                        and enhance my skills with a new team.
                     </p>
                     <aside className="flex gap-9 p-2">
                        <button
                           className="mt-6 text-white font-bold bg-brand-blue100 w-36 py-2 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-white hover:bg-brand-blue200"
                        >
                           Hire Me!
                        </button>
                        <button
                           className="mt-6 text-brand-blue100 font-bold bg-white w-36 py-2 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-sky-400 flex gap-1 justify-center items-center"
                        >
                           <PiChatsTeardropDuotone
                              width={10}
                              className="text-brand-blue100 "
                           />
                           Let&apos;s Chat
                        </button>
                     </aside>
                  </article>
                  <article className="flex-1 md:relative">
                     <Image
                        src={HomePicture}
                        fill
                        sizes="width:100%"
                        alt=""
                        className=""
                     />
                  </article>
               </section>
            </section>
            {/* <section id='about' className='h-16 absolute bottom-0' /> */}
         </section>
         <About />
         <Projects />
      </>
   );
}

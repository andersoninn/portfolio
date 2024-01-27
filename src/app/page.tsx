import Image from 'next/image';
import { PiChatsTeardropDuotone } from 'react-icons/pi';
import HomePicture from '@/assets/image/home/homePicture.svg';

import HomePolygons from '@/assets/image/home/homePolygons.svg';
import About from '@/components/About';
import Projects from '@/components/Projects';

// Adjust in navbar -sticky our fixed
// Adjust in gradient bg (Home to About/ About to Projects)

export default function Page() {
  return (
    <>
      <section
        className="md:bg-left md:bg-[url('../assets/image/home/homeBg.svg')] md:mt-0 md:pt-16
            mt-36
            bg-[url('../assets/image/home/homeBgMobile.svg')] bg-no-repeat min-h-screen relative "
        id="home"
      >
        <section
          className="md:pt-20 md:max-w-[1180px]
            container m-auto pt-44 max-w-[412px] px-6"
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
            <article className="md:pt-16 -mt-4 bg-red-200">
              <h1
                className="md:text-8xl
                     text-brand-blueTitle text-7xl font-bold"
              >
                <span className="pr-44 md:pr-0">Hey, </span>
                <span>I&apos;m a</span>
                <span className="text-brand-blue100 block">Front-End</span>
                <span className="block">Developer</span>
              </h1>
              <p className="pt-4 pl-2 md:text-medium text-lg ">
                My name is
                <span className="text-brand-blueTitle hover:text font-bold md:text-medium text-lg">
                  Anderson Carvalho.
                </span>
              </p>
              <p className="pl-2 md:text-medium text-lg">
                Former Special Infantry soldier shifting to programming in
                Portugal. Committed to growth, eager to contribute and enhance
                my skills with a new team.
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
            <article className="md:relative">
              <Image
                src={HomePicture}
                alt=""
                className="md:translate-x-0 md:translate-y-0 md:w-[470px] md:h-[480px] md:static
                -translate-x-56 -translate-y-44 absolute w-80"
              />
            </article>
          </section>
        </section>
      </section>
      {/* <About />
      <Projects /> */}
    </>
  );
}

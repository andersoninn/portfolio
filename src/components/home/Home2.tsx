'use client';
import 'animate.css';
import { Texts } from '@/lib/Texts2';


import NavbarUI from '../ui/NavbarUI';

export default function Home2() {
  const texts = Texts.home;
  return (
    <>
      <section className="max-w-screen h-full">
        <NavbarUI />
        <section className="flex justify-center overflow-x-hidden">
          <section className="container w-[90%] min-h-[700px] flex items-center text-left">
            <article className="z-10 text-[80px] font-extrabold flex flex-col animate__animated animate__fadeInLeft">
              <span>
                <h2> Anderson</h2>
                <h2 className='-mt-12'>Carvalho</h2>
              </span>

              <span className='text-4xl text-nowrap -mt-4'>
                Web &
              </span>
              <span className='text-4xl text-nowrap'>
                Software Developer
              </span>
            </article>
            <article className="max-w-screen animate__animated animate__fadeInRight ">
              <div className=" -translate-Y-1/2 rotate-45 min-w-[500px] min-h-[500px] bg-blue-500 z-0" />
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

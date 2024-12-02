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
        <section className="flex justify-center overflow-x-hidden -mt-12">
          <section className="container w-[90%] min-h-[700px] flex items-center text-left">
            <article className="z-10 text-[60px] font-extrabold flex flex-col -space-y-8 animate__animated animate__fadeInLeft">
              <p>Lorem</p>
              <p>ipsum sit</p>
              <p>dolor amet</p>
              <p>consectetur</p>
              <p>adipiscing</p>
              <p>sit elit</p>
              <p>amet</p>
            </article>
            <article className="max-w-screen animate__animated animate__fadeInRight -ml-[50%]">
              <div className=" -translate-Y-1/3 rotate-45 min-w-[500px]  min-h-[500px] bg-blue-500 z-0" />
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

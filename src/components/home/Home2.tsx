'use client';
import 'animate.css';
import { Texts } from '@/lib/Texts2';

import Navbar from '../ui/Navbar';
import MyComponent from './MyComponent';

export default function Home2() {
  const texts = Texts.home;
  return (
    <>
      <section className="max-w-screen h-full">
        <Navbar />
        <section className="flex justify-center overflow-x-hidden">
          <section className="container w-[90%] min-h-[700px] flex  items-center text-left">
            <article className="z-10">
              <MyComponent />
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

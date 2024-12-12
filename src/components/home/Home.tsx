'use client';
import 'animate.css';
import { Texts } from '@/lib/Texts';
import { HiArrowDown } from 'react-icons/hi2';

import NavbarUI from '../ui/NavbarUI';
import Link from 'next/link';

export default function Home() {
  const texts = Texts.en.home;
  return (
    <>
      <section className="max-w-screen h-full relative bgHome">
        <NavbarUI />
        <section className="">
          <section className="container w-[90%] my-16 m-auto min-h-[700px] md:min-h-[1000px] flex flex-col items-center justify-around md:pb-16">
            {/* H1 */}
            <article className="flex flex-col justify-center items-center text-black text-center">
              <span>
                <p className="text-xl md:text-3xl lg:text-4xl animate__animated animate__fadeIn animate__delay-1s mb-2">
                  {texts.subtitle1}
                </p>
                <p className="text-6xl md:text-9xl lg:text-[200px] text-nowrap font-extrabold animate__animated animate__fadeIn">
                  {texts.title1}
                </p>
                <p className="text-xl md:text-3xl lg:text-4xl animate__animated animate__fadeIn animate__delay-2s md:mt-2 md:-mb-2">
                  {texts.subtitle2}
                </p>
                <p className="text-6xl md:text-9xl lg:text-[200px] font-extrabold animate__animated animate__fadeIn">
                  {' '}
                  {texts.title2}
                </p>
                <p className="text-xl md:text-3xl lg:text-4xl animate__animated animate__fadeIn animate__delay-3s">
                  {' '}
                  {texts.subtitle3}
                </p>
              </span>
            </article>

            <article
              className="flex justify-center items-center md:pt-12 lg:pt-0"
            >
              <HiArrowDown className="w-6 h-6  lg:w-8 lg:h-8 animate__animated animate__fadeIn animate__delay-4s text-black/0" />
            </article>
            <article className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] overflow-hidden absolute right-0 -bottom-[77px] md:-bottom-[144px]">
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

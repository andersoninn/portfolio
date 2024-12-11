import React from 'react';
import { Texts } from '@/lib/Texts2';
import Slider from './Slider';
import Hello from './Hello';
export default function About2() {
  const texts = Texts.en.about;

  return (
    <section>
      <section className="bgAbout -mt-72 overflow-x-hidden md:-mt-[420px] relative">
        <section className="container m-auto w-[90%] min-h-[700px] flex flex-col justify-center items-center gap-10">
          <section className="flex flex-col items-center gap-8 min-h-[500px] max-w-[900px] md:-mt-32">
            <Hello />

            {/* SPAN */}
            {/* <article className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full mt-44 bg-gray-100 flex items-center justify-center md:-mt-52 lg:mt-12 xl:mt-24">
              <span>minha foto </span>
            </article> */}
            {/* DESCRIPTIOPN */}
            <p className="text-white text-center text-lg md:text-xl md:-mt-32">
              {texts.decription}
            </p>
            {/*  CALL TO ACTION */}
            <article className="w-full flex flex-col justify-end items-center text-lg text-white pb-2 ">
              <span>
                <p className="md:text-xl">{texts.span1}</p>
              </span>
            </article>
            {/* SLIDER */}
            <Slider />
          </section>
        </section>
      </section>
    </section>
  );
}
